const myPromise = new Promise((resolve, reject)=> {
    /*
    выполнение ассинхронных действий
    внутри этой функции нужно в результате вызвать одну из функций resolve или reject
    */
})

fetch('https://jsonplaceholder.typicode.typicode.com/todos')
    .then(response => {
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))