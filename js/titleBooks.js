//https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ
//https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ
//https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ

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

 function renderizarTitulo (items) {
      const container = document.getElementById('titulo-container');
      items.results.forEach((item) => {
        const divTitulos = document.createElement('div');
     
        divTitulos.innerHTML = `
         <div class="titulo-caixa">
             <img src="./img/the-woman.png" width="222px" height="300">
          <div>
            <h3 class="title">${item.title}</h3>
            <h3 class="title">${item.author}</h3>
            <h3 class="title">${item.price}</h3>
          </div>
        </div>
       `;

      divTitulos.classList.add("titulo");
       container.appendChild(divTitulos)
})}
 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
     