let contenedor = document.getElementById("contenedor");
let infoDeApi;
function imprimirCards() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((dataAPI) => {
      infoDeApi = dataAPI;

      let cards = "";
      dataAPI.forEach((producto) => {
        cards += `
          <div class='card d-flex justify-content-center' style="object-fit: contain";>
             <img class="product-img" src="${producto.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <a href="./details.html?id=${producto.id}" class="btn btn-primary">More Details</a>
          </div>
          </div>`;
        contenedor.innerHTML = cards;
      });
    })
    .catch((err) => console.error(err.message));
}
imprimirCards();
