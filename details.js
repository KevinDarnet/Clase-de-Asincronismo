let cadenaParametroUrl = location.search;
let parametros = new URLSearchParams(cadenaParametroUrl);
let id = parametros.get("id");
let contenedor2 = document.getElementById("contenedor2");

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((dataAPI) => {
    let productoEncontrado = dataAPI.find((producto) => producto.id == id);
    console.log(productoEncontrado);
    imprimeDetail(productoEncontrado);
  })
  .catch((err) => console.error(err.message));

function imprimeDetail(producto) {
  contenedor2.innerHTML = "";
  let div = document.createElement("div");
  div.className = "card-detail";
  div.innerHTML = `<img style="width: 20rem;" style="heigth: 18rem;" src="${producto.image}" alt="profile" class="card-img-top">
    <div>
        <h5>${producto.title}</h5>
         <p>${producto.description}</p>
    </div>`;

  contenedor2.appendChild(div);
}
