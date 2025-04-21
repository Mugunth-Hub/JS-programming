let newPromise = new Promise((resolve, reject) => {
    let dataRecived = true;
    if (dataRecived) {
        resolve("Data Recieved")
    }
    else {
        reject("Data Not Recieved")
    }
})

newPromise.then((message)=>{
console.log("succes:"+message );
return "Next Sucess" + message
})
.catch((message)=>{
console.log("Failure:"+message );

})
.finally(()=>{
    console.log("End");

})

// function fetchProfile(sucessCallBack, errorCallback) {
//     let dataRecived = false;

//     if (dataRecived) {
//         sucessCallBack("Data Recived")
//     }
//     else {
//         errorCallback("Data Not Recieved")
//     }
// }

// fetchProfile(
//     (message) => {
//         console.log(message);
//         fetchProfile(
//             (nextMessage) => {
//                 console.log("Next Message:" + nextMessage);

//             },
//             (nextError) => {
//                 console.log("Next Error:" + nextError);

//             }
//         )
//     },
//     (error) => {
//         console.log(error);

//     }
// )