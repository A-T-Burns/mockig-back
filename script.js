let container = document.querySelector(".container")

fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((res) => container.textContent = `${res.image}`)
    .catch((err) => console.log(err))
    
