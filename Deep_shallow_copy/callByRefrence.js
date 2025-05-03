// stack - to store premitive values 
// heap - to sotre non-primitive values

/*    Stack Memory

     Stack (before Modification):

    |address | Variable        | Value -> Reference ( Address) |
    |-----------------|------------------|
    |  0x100   |  Obj1         |    0x001         |
    |  0x104   |  arr1         |    0x002         |
    |  0x108   |  obj2         |    obj1 = 0x001         |
    |  0x112   |  arr2         |    arr1 = 0x002         |
   

    Heap memory

    | Address | object           |
    |----------------------------|
    |  0x001  |    { name : 'Spatz } |
    |  0x002  |    [ 1, 2, 3] |
    
*/

let obj1 = { 
    name : "Spatz"
}

let arr1 = [1,2,3,4,5]

let obj2 = obj1
let arr2 = arr1

obj1.name = "Scooby"
obj2.role = "Developer"
arr1[0] = "One"

console.log(obj1,obj2);
console.log(arr1,arr2);

