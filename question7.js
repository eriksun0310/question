
/*


7.題目概要：回傳一個陣列，裏面放有年紀最大的開發者資料，如年齡相同，則按原本陣列的顯示次序來顯示。

return :
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
*/

var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

// 解法1: Math.max 找出最大值
const findMostDev = ()=>{
    // 展開運算式, 就會是個別的參數, 不會是一個array
    const maxAge = Math.max(...list1?.map(i=>i?.age))
    const findMaxDev = list1?.filter(i=>i?.age === maxAge)
    return findMaxDev
}

// 解法2: reduce 比較出最大值
const findMostDiv2 = ()=> {
    const maxAge2 = list1?.reduce((a,b)=> a.age >= b.age ? a: b)
    const findMostDiv2 = list1?.filter(i=> i?.age === maxAge2?.age)
    return findMostDiv2
}