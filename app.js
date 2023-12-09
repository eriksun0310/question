const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Student = require("./models/student")






// mongoose db
mongoose
.connect("mongodb://localhost:277017/exampleDB")
.then(()=>{
    console.log('success mongooseDB ....')
}).catch((e)=>{
    console.log(e)
})

app.set("view engine", 'ejs');
// middleware 給post 用
app.use(express.json());
app.use(express.urlencoded({ extended: true}))




// GET: 獲得所有學生資料
app.get('/students', async (req, res)=>{
    try{
        let studentData = await Student.find({}).exec();
        return res.send(studentData)

    }catch(e){
        return res.status(500).send("尋找資料時發生錯誤")
    }
})

// GET: 獲得特定學生 id
app.get('/student/:_id', async(req,res)=>{
    let { _id } = req.params
    try{
        let foundStudent = await Student.findOne({ _id }).exec()
        return res.send(foundStudent)

    }catch(e){
        return res.status(500).send(e.message)
    }
})

// POST: 創建一個新學生
app.post('/student', async(req, res)=>{
    try{
        // 使用者給的資料
        let {name, age, merit,other} = req.body
        
        let newStudent = new Student({
            name,
            age,
            scholarship:{
                merit,
                other,
            },
        })
        let saveStudent = await newStudent.save()
        // 給user的顯示的訊息
        return res.send({
            msg: "資料儲存成功!",
            savedObject:saveStudent
        })
    }catch(e){
        return res.status(400).send(e.message)
    }
})

// PUT: 修改特定的學生資料, user需提供完整資料(若無填寫會被覆蓋過去)
app.put('/student:_id', async(req,res)=>{
    try{
        let { _id } = req.params
        let { name, age, merit,other } = req.body

        let newData = await Student.findOneAndUpdate(
            { _id },
            { name, age, scholarship:{ merit, other }},
            {
                new:true,
                runValidators:true,
                overwrite:true, // 覆蓋所有數據
                /*
                因為HTTP put request 要求客戶端提供所有數據,所以
                我們需要根據客戶端提供的數據, 來更新資料庫內的資料
                */
            }
        )
        res.send({msg:'成功更新學生資料!', updatedData:newData})
    }catch(e){
       return res.status(400).send(e)
    }
})

class NewData {
    constructor(){  
        setProperty(key, value) {
            if(key !== 'merit' && key !== 'other'){
                this[key] = value
            }else{
                this[`scholarship.${key}`] = value
            }
        }
    }
}



// PATCH: 修改特定的學生資料, user只需提供要被修改的資料
app.patch('/student:_id', async(req, res)=>{
    try{

        let { _id } = req.params
        let newObject = new NewData()
        for(let property in req.body){
            newObject.setProperty(property, req.body[property])
        }

        // req.body => { age:'29', name:'小鐘', merit:'3000', other:'1500'}
        // newObject => { age:'29', name:'小鐘', 'scholarship.merit':'3000', 'scholarship.other':'1500' } 

        let newData =  await Student.findByIdAndUpdate({ _id }, newObject,{
            new:true,
            runValidators:true,
            // 不能寫overwrite:true(因為資料會全部被覆蓋過去)
        })
        res.send({msg:'成功更新學生資料!', updatedData:newData})
    }catch(e){
        return res.status(400).send(e)
    }
})


// DELETE: 刪除特定的學生資料
app.delete('/student:_id', async(req, res)=>{
    try{
        let { _id } = req.params
        let deleteResult = await Student.deleteOne({ _id })
        return res.send(deleteResult)
    }catch(e){
        return res.status(500).send('無法刪除學生資料')
    }
})














app.listen(3000, ()=>{
    console.log('server listen port 3000')
})