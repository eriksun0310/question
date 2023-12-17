
/*
16.詢問缺少的細節

並僅返回缺少詳細資訊的開發人員：
return:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]


*/

var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];



// 解法1.(我的): 寫法太冗長,有考慮使用變數, 但是想不到...
const findNullArr = list1?.map((i)=>{
    if(i?.age === null){
        return{
            ...i,
            question:`Hi, could you please provide your age.`
        }
    }else if(i?.continent === null){
        return{
            ...i,
            question:`Hi, could you please provide your continent.`
        }
    }else if(i?.country === null){
        return{
            ...i,
            question:`Hi, could you please provide your country.`
        }
    }else if(i?.firstName === null){
        return{
            ...i,
            question:`Hi, could you please provide your firstName.`
        }
    }else if(i?.language === null){
        return{
            ...i,
            question:`Hi, could you please provide your language.`
        }
    }else if(i?.lastName === null){
        return{
            ...i,
            question:`Hi, could you please provide your ${i?.lastName}.`
        }
    }else {
        return null
    }
})
const result = findNullArr?.filter(Boolean)
console.log('result',result)


// 解法2.(gbt):使用reduce
const findNullArr2 =(person)=>{
   const nullProperties = Object?.entries(person)?.reduce((accr, [key, value])=>{
    if(value === null){
        accr.push(key)        
    }
    return accr
   }, [])

   if(nullProperties.length > 0){
       // nullProperties = ['language'] 
        // propertyName = 'language'
        // 用join 的方法只限於 nullProperties = ['language'] 一個的時候,如果今天 ['language', 'continent'] 就會是 'languagecontinent',這時就要考慮用map
        const propertyName = nullProperties.join(', ')
        return {
            ...person,
            question: `Hi, could you please provide your ${propertyName}.`
        }
   }
   return null
}

// 這兩個的寫法是一樣的
// const findNullResult = list1?.map((i)=>findNullArr2(i))?.filter((i)=> i !== null)
// filter(Boolean) : 會去除掉 null 的元素
const findNullResult = list1?.map(findNullArr2)?.filter(Boolean)
console.log(findNullResult)








