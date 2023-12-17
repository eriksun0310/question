

//9. 檢查所有人員的年齡是否都在, 這些範圍內 [10,20,30,40,50,60,70,80,90]

var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

// 檢查年齡是否有在範圍內
const checkRangeAge =(age, min, max)=>{
    return (age>= min && age <= max)
}

// 檢查所有的年齡
const checkAllAge = ()=>{
    // 檢查所有人員中是否有一位超過100的
    const continueCheckAge = list1?.some((dev)=>dev?.age >= 100)
    
    // 沒有超過100, 不繼續往下檢查
    if(!continueCheckAge){
        return false
    }
    const ageGroup = [10,20,30,40,50,60,70,80,90]
    for(let i = 0; i<ageGroup.length ; i++){
            const min = ageGroup[i]
            const max = min + 9
        // 檢查單一年齡
        const checkAge = list1?.some((dev)=>checkRangeAge(dev.age, min, max))
        if(!checkAge){
            return false
        }
    }
    return true
}

console.log(checkAllAge())