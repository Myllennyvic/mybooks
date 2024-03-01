const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ`;

// Selecionar o elemento onde os livros serão exibidos
const bookListElement = document.getElementById('bookList');

// Fazer uma requisição para a API usando fetch
fetch(apiUrl)
  .then(response => response.json()) // Converter a resposta para JSON
  .then(data => {
    // Verificar se a resposta contém dados
    if (data && data.results && data.results.books) {
      // Iterar sobre os livros retornados
      data.results.books.forEach(book => {
        // Criar elementos HTML para exibir as informações do livro
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
          <h2>${book.title}</h2>
          <p>Autor: ${book.author}</p>
          <p>Descrição: ${book.description}</p>
          <hr>
        `;

        // Adicionar o elemento do livro à lista de livros
        bookListElement.appendChild(bookElement);
      });
    } else {
      // Se nenhum livro for encontrado, exibir uma mensagem
      bookListElement.innerHTML = '<p>Nenhum livro encontrado.</p>';
    }
  })
  .catch(error => {
    // Em caso de erro, exibir uma mensagem de erro
    bookListElement.innerHTML = `<p>Erro ao acessar a API: ${error}</p>`;
  });
