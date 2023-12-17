var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

//作法1(我的):
const checkLanguageDiverse = () =>{

    // totalLanguage= {'Python':1, 'Ruby':2, 'JavaScript':3 }
    const totalLanguage = list1.reduce((accr, item)=>{
        accr[item?.language] = (accr[item?.language] || 0) +1
        return accr
    }, {})

    //所有的[3,2,1]
    const numArr = Object.values(totalLanguage)

    // 第一大:3
    const firstMaxNum = Math.max(...numArr)
    //  排除掉第一大的arr
    const filterMaxNum = numArr?.filter((i)=>i !== firstMaxNum)

    // 第二大:2
    const secondMaxNum = Math.max(...filterMaxNum)

    return firstMaxNum >(secondMaxNum*2)
}

// 作法2(gpt):用sort()
const checkLanguageDiverse2 = () =>{

    const totalLanguage = list1.reduce((accr, item)=>{
        accr[item?.language] = (accr[item?.language] || 0) +1
        return accr
    }, {})

    const numArr = Object.values(totalLanguage)


    /*
    升序：由小排到大
    降序：由大排到小
    sort((a,b)=> a-b):升序
    sort((a,b)=> b-a):降序
    */ 

    const [secondMaxNum, firstMaxNum] = Object.values(totalLanguage).sort((a, b) => b-a);

    return firstMaxNum >(secondMaxNum*2)
}

const result = checkLanguageDiverse()
console.log(result)