// (function (){
//     console.log("I am Bear");
// })()

function outerFunction(){
    let outerVariable = "Im from outer scope"
        function innerFunction (){
        console.log( outerVariable );
    }
    return innerFunction
}
let innerFun = outerFunction();
innerFun()
