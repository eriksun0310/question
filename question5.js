/*
5.題目概要：回傳一個物件，裏面會顯示有多少個開發者在用某個程式語言。
return { C: 2, JavaScript: 1, Ruby: 1 }
*/
var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];


const result = list1?.reduce((accr, i)=>{
    // 如果該語言的 key 已經存在，就將計數加 1，否則初始化為 1
    accr[i?.language] = ( accr[i?.language] || 0 )+1
    return accr
}, {})