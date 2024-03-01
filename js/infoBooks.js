const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ`;


const bookListElement = document.getElementById('bookList');


fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    if (data && data.results && data.results.books) {
      data.results.books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
        <div class="divList">
        <img class="list-img" src="../image/image${index}.png"  width="222px" height="300" >
        <h2 class="linkbooks">${book.title}</h2>
        <p>${book.description}</p>
        <p class="autor">Autor: ${book.author}</p>
        </div>
        `;

        bookListElement.appendChild(bookElement);
      });
    } else {
      bookListElement.innerHTML = '<p>Nenhum livro encontrado.</p>';
    }
  })
  .catch(error => {
    bookListElement.innerHTML = `<p>Erro ao acessar a API: ${error}</p>`;
  });
