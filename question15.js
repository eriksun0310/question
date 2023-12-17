/*
    17.首先按照编程语言的字母顺序排序，如果有相同语言的开发者，则按照他们的名字字母顺序进行进一步排序。

return:
[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
*/

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

// 計算ascii 的加總
const calculateAsciiSum = (name)=>{
    let sum = 0
    // char:  遍歷name的每個字元 A、b、a
    for(const char of name){
        sum +=char.charCodeAt()
    }
    return sum
}

// 返回奇數的人員
const findOddName = ()=>{
    const  asciiObj = list1?.reduce((accr, item)=>{
        const sum =  calculateAsciiSum(item?.firstName)
        //  檢查 ascii 轉換後是奇數的, 才push 進去
        if(sum % 2 !== 0){
            accr.push({
                ...item
            })
        }
        return accr
    }, [])
    return asciiObj
}

const resultOddName =  findOddName()
console.log('resultOddName  ==>',resultOddName)
