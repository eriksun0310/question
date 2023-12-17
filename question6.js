/*
6. 如果清單中的所有開發人員都使用同一種語言編寫程式碼
return true
*/
var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'C' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

// 寫法1.(我的): 會有問題, 沒想到好的寫法
const checkSomeLanguage = ()=>{
    return list1?.map((i)=>{
        const a =  list1?.every((item) =>item?.language === i?.language)
        if(a){
            return true
        }else {
            return false
        }
    })
}


// 寫法2.(gpt): 利用兩層 every遍歷數組
const checkSomeLanguage2 = ()=>{
    return list1?.every((dev)=>{
        // 利用every遍歷數組, 如果找到不同語言,則返回false
        return list1?.every((item)=>item?.language === dev?.language)
    })
}





console.log(checkSomeLanguage2())
