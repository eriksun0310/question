/*
    17.首先按照编程语言的字母顺序排序，如果有相同语言的开发者，则按照他们的名字字母顺序进行进一步排序。

return:
[ 
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];
*/

var list1 = [  
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

const sortedArr = ()=>{
   const sortedLanguage = list1?.sort((a,b)=>{
    if(a.language < b.language){
        return -1
    }
    if(a.language > b.language){
        return 1
    }
    if(a.language === b.language){
        return a.firstName.localeCompare(b.firstName) // 在語言相等時,按照firstName 排序
    }
    return 0
   })
   return sortedLanguage
}

const sortedResult =  sortedArr()
console.log('sortedResult',sortedResult)