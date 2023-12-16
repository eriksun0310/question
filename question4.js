/*
4.題目概要：
找出第一個寫Python的開發者，按以下格式回傳結果：
firstName, country
如無Python開發者，就回傳There will be no Python developers
*/
var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];


const getFirstPython = (list)=>{
    const findItem =  list?.find((i)=> i?.language ==='Python') 
    return findItem ? `${findItem?.firstName},${findItem?.country}` :'There will be no Python developers'
}


console.log(getFirstPython(list1))