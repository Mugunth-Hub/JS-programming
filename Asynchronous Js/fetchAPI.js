fetch("")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Data Not Found")
        }
        else {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);

    })

async function fetchData() {
    try {

        let response = await fetch("http://fakestoreapi.com/users")
        if (!response.ok) {
            throw new Error("data not found")
        }
        else{
        let data = await response.json(k)
        console.log(data);
        }
    }
    catch (error) {
        console.log( error.message);
    }
}
fetchData()