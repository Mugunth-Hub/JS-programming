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