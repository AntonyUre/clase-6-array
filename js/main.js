const course = [
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
    url:"https://plataforma.coderhouse.com/continua-tu-carrera?utm_campaign=sidebar&utm_medium=plataforma&utm_source=upselling"
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
  {
    category: "Programación",
    title: "JavaScript",
    date: "29/07/2022",
    price: "S/. 212 PEN",
  },
];

let cardsContainer = document.querySelector(".container__course--cards ");

for (i = 0; i < course.length; i++) {
  console.log(course[i].title);
  cardsContainer.innerHTML += `
  <div class="container__course--cards" id="container__course--cards">
            <div class="card">
                <span class="category">${course[i].category}</span>
                <h2 class="title">${course[i].title}</h2>
                <p class="date">${course[i].date}</p>
                <h3 class="price">${course[i].price}</h3>
                <a class="btn-info" href="${course[i].url}">Inscribirse</a>
            </div>
  `;
}
