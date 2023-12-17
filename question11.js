

// 11. 計算平均年齡

var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

const avgAge = ()=>{
    const calculateObj =  list1?.reduce((accr, item)=>{
        accr.totalPeople ++;
        accr.totalAge += item?.age
        return accr
    }, {
        totalAge:0,
        totalPeople:0
    })

    const calculateAvgAge = Math.round(calculateObj?.totalAge / calculateObj?.totalPeople)
    return calculateAvgAge
}

const result = avgAge()
console.log(result)