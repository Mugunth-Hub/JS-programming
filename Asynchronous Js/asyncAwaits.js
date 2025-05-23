let newPromise = new Promise((fullfilled, failure) => {
    let dataRecieved = true;
    if (dataRecieved) {
        fullfilled("Data Fetched Sucessfully")
    }
    else {
        failure("Data Not Found")
    }
})
try {
    let message = await newPromise
    console.log(message);
}
catch(error){
    console.log(error); 
}
finally{
    console.log("end");
    
}
executePromise();

console.log("End");
console.log("End");
console.log("End");
