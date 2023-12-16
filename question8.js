/*
 8.題目概要：  以下開發商 continent必須符合來自 :  Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
 否則false

 return: true
*/

var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Asia', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Americas', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
  ];


// 用Set 來檢查所有開發商是否有包含在 Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
const findContinent = ()=>{
let desiredContinents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

// 用 Set 来记录实际出现的地理区域
let actualContinents = new Set()

// 遍历 list1，记录每个开发者的地理区域
list1?.forEach((developer)=>{
    actualContinents.add(developer?.continent)
})

console.log( 'actualContinents ',actualContinents)

    // 检查是否每个所需的地理区域都至少有一个开发者
let hasDesiredContinents = desiredContinents?.every((continent)=>{
    return actualContinents?.has(continent) 
})
console.log( 'hasDesiredContinents ',hasDesiredContinents)
return hasDesiredContinents

}
findContinent()