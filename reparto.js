fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(response => {
        console.log(response)
    })