let results = document.getElementById("results")


fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=some_api')
.then(response => response.json())
.then(data => {
    data.json(item => {
        let newDiv = document.createElement("p")
        newDiv.innerHTML = item.symbol + item.name
        results.appendChild(newDiv)
    })   
}) 

