const apiKey = "ece81a58-560f-45c7-b07e-1b970ce90965"
let urlApi = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    qString = "?CMC_PRO_API_KEY="+ apiKey + "&start=1&limit=5&convert=BRL"


const api = () => {
    return fetch(urlApi + qString)
    .then (response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
}

api();