const baseURL = 'https://pokeapi.co/api/v2/pokemon';

function getThreePokemon() {
    axios.get(`${baseURL}/1`)
        .then(res => {
            console.log(`The first pokemon is ${res.data.name}`)
            return axios.get(`${baseURL}/2`)
        })
        .then(res => {
            console.log(`The second pokemon is ${res.data.name}`)
            return axios.get(`${baseURL}/3`)
        })
        .then(res => {
            console.log(`The third pokemon is ${res.data.name}`)
        })
        .catch(err => {
            console.log('ERROR', err);
        });
};

function getMorePokemon() {
    for (let i = 0; i < 10; i++) {
        axios.get(`${baseURL}/${i}`)
            .then(res => {
                console.log(`Pokemon Num ${i} - Name ${res.data.name}`)
            })
        }
}


async function getMorePokemonAsync() {
    for (let i = 1; i < 10; i++) {
        let pokepromise = axios.get(`${baseURL}/${i}`)
        // awaiting a variable when you're making multiple requests in parallel is faster
        // but with a loop may not be practical. This is likely a better implementation
        // if requests are being made in parallel
        // Another option is Promise.all --> await Promise.all and await the master promise
        // pass all of the requests into the promise.all
        let res = await pokepromise
        console.log(`Pokemon Num ${i} - Name ${res.data.name}`)
    }
}


// getThreePokemon();

// getMorePokemon();

getMorePokemonAsync();

