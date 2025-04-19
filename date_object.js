// Date.getFullYear()

let date = new Date()
// console.log( date );
// console.log( date.getFullYear() );


//Date.getMonth()

// console.log( date.getMonth()+1); // based on index show starts from 0


//Date.getDate

// console.log( date.getDate());


//Date.getHours

// console.log( date.getHours());


//Date.getMinutes

// console.log( date.getMinutes());


//Date.getSeconds

// console.log( date.getSeconds());


//Date.getMileseconds

// console.log( date.getMilliseconds());


//Date.setFullYear(year , month , day)

// date.setFullYear( 2020 )
// console.log( date );


// Date.setMonth(month,day)

date.setMonth( 10,15 )
console.log( date );
console.log( date.toLocaleDateString() );
console.log( date.toDateString() );
console.log( date.toLocaleTimeString() );
console.log( date.toLocaleString() );



