// 14. 計算 所有人員的食物選項
// return : { vegetarian: 2, standard: 1, vegan: 1 }
var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
];


const orderFood =  list1.reduce((accr, item)=>{
    accr[item.meal] = (accr[item.meal] || 0) +1
    return accr
}, {}) 
console.log(orderFood)