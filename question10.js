

/*
    10. 題目：編寫一個函數，將username屬性加入輸入數組中的每個物件：
 return : 
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1993' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2003' }
]

*/

var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];


const addListUserName = ()=>{
    const nowYear = new Date().getFullYear()
    const addUserName =  list1?.map((i)=>{
        const firstName = i?.firstName.toLocaleLowerCase()
        const replaceLastName =i?.lastName?.replace('.', '')
        const lastName = replaceLastName.toLocaleLowerCase()
        const devYear = nowYear- i?.age
        const userName = `${firstName}${lastName}${devYear}`
        return {
            ...i,
            username:userName
        }
    })
    return addUserName
}

console.log('addListUserName ==>',addListUserName())