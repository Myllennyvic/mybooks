document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ'

    fetch(baseUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error('Erro de rede! Código:'+response.status);
        }
        return response.json()
    })
    .then((data) => {
        console.log(data.results[0])
        renderizarTitulo(data)


    })
    .catch((err) => console.log(err))
})