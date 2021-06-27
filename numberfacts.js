const URL = 'http://numbersapi.com'

async function getNumberFact() {
    let res = await axios.get(`${URL}/41`)
    console.log(res.data);
}

async function getNumberFactsMultiple(num1,num2,num3,num4) {
    let num1Promise = axios.get(`${URL}/${num1}`)
    let num2Promise = axios.get(`${URL}/${num2}`)
    let num3Promise = axios.get(`${URL}/${num3}`)
    let num4Promise = axios.get(`${URL}/${num4}`)

    let num11 = await num1Promise
    let num21 = await num2Promise
    let num31 = await num3Promise
    let num41 = await num4Promise

    console.log(num11.data)
    console.log(num21.data)
    console.log(num31.data)
    console.log(num41.data)
}

let listContainer = document.getElementById('list')

async function getFactsOnFavNumber(number) {
    for (let i = 0; i < 4; i++) {
        let res = await axios.get(`${URL}/${number}`)
        console.log(res.data)
        let fact = res.data;

        let factContainer = document.createElement('li')
        factContainer.innerHTML = `${fact}`
        
        listContainer.append(factContainer)
    }
}


getNumberFact();
getNumberFactsMultiple(41,14,89,99);
getFactsOnFavNumber(14);