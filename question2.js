// 2.題目概要：回傳一個在每個物件上，都有加上greeting屬性的陣列。
var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

const newList = list1?.map((i)=>({
    ...i,
    greeting:`Hi ${i?.firstName}, what do you like the most about ${i?.language}?`
}))

console.log('newList',newList)