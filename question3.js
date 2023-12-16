
//3.題目概要：如果整個list裏面，有其中一個開發者是Ruby開發者，就回傳true
var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

const checkRuby = list1?.some(i=>i?.language === 'Ruby')

console.log('checkRuby',checkRuby)