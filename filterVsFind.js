let employees = [
    { empName: "Mugu", Salary: 25000 },
    { empName: "Dharuu", Salary: 35000 },
    { empName: "Pavi", Salary: 25000 }
]

let filterData = employees.filter(val => val.Salary >= 25000);
employees.filter(val => console.log(val))

console.log(filterData);

let filterDataByFind = employees.find((val, index, array) => {
    console.log(index);
    return val.Salary > 25000

})

console.log(filterDataByFind);
