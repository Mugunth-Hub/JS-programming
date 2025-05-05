function add(a,b,c){
    console.log( a+b+c );
}
add( 1,2,3 )

function add(a){
    return function(b){
        return function(c){
            console.log( a+b+c );
        }
    }
}

add(10)(20)(30);

let curry1 = add(1000);
let curry2 = curry1(2000);
curry2(300);

