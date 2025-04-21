// stack - to store premitive values 
// heap - to sotre non-primitive values

/*      Call By Value

     Stack (before Modification):

    | Address | Variable | value |
    |----------------------------|
    |  0x100  |    x     |   10  |
    |  0x104  |    y     |   10  |

     Stack (after Modification):

    | Address | Variable | value |
    |----------------------------|
    |  0x100  |    x     |   20  |
    |  0x104  |    y     |   10  |
 
*/


let x = 10;
let y = x;
// x = 20;
y = 20;
console.log(x, y);
