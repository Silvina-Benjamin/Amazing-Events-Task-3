// contenedor padre de las cards
//let contenedorCard = document.getElementById("contenedor-4-cards");
//console.log(contenedorCard)
// variable donde se va a alojar card|
// let cardsDeEventos= ""

// // contenedor de los checkbox
// let contenedorCheckbox = document.getElementById("contenedorCategorias");
// // variable donde se va a alojar cada checkbox
// let checkboxCategoria =""

//contenedor de card
let contenedorPrincipal = document.querySelector('div.contenedor-4-cards')

// Cards 
resultados =[]
const contenedorOtraCard = document.createElement('div')
contenedorOtraCard.classList.add('card')
for(let datosEvento of data.events){
    resultados.push(createCard(datosEvento))
}
for (let card of resultados){
    document.querySelector('div.contenedor-4-cards').innerHTML+= card
}

//Categorias

let listadoCategorias = []
for(let event of data.events){
    if (!listadoCategorias.includes(event.category)){
        listadoCategorias.push(event.category)
    }
}
let htmlCategorias = ""
for (let categoria of listadoCategorias){
    htmlCategorias += `<div class="col-6 col-md-4 col-xl-2 form-check">
    <input class="form-check-input" type="checkbox" value="${categoria}" id="input-${categoria}">
    <label class="form-check-label" for="input${categoria}">
        ${categoria}
    </label>
</div>`
}
document.querySelector(".contenedorCategorias").innerHTML= htmlCategorias



// Aplico Filtro Categoria
let categoriasSeleccionadas = []
let checkbox = document.querySelectorAll('input[type=checkbox]')
checkbox.forEach(input => {
    input.addEventListener('change', (e)=>{
        contenedorPrincipal.innerHTML = ""
        checkbox.forEach(checkeado =>{
            if (checkeado.checked){
                categoriasSeleccionadas.push(checkeado.value)
            }
        })
        eventosFiltrados = data.events.filter(ev => categoriasSeleccionadas.includes(ev.category))
            for(let eF of eventosFiltrados){
                contenedorPrincipal.innerHTML += createCard (eF)
            }
        // }
    })
})


// // Filtro por búsqueda 
// let busqueda = document.querySelectorAll('input[type=search]')
    contenedorPrincipal.innerHTML = "";
    let myArray = data.events;
    document.addEventListener('submit', (eb)=>{
        eb.preventDefault()
        let palabraBusqueda = eb.target[0].value.toLowerCase();
        let filtroBusqueda = data.events.filter (eventobusqueda => {
            if(eventobusqueda.name.toLowerCase().includes (palabraBusqueda) || eventobusqueda.description.toLowerCase().includes(palabraBusqueda )){
            return true;
            } 
        })
        for(let eB of filtroBusqueda){
            contenedorPrincipal.innerHTML += createCard (eB)
        }
    })
    let selection = []
    // Funcion para completar con cards cuando no hay filtro
    function vacio(){
        if (selection.indexOf() == -1){
            for (const event of data.events){
                contenedorPrincipal.innerHTML += createCard(event)
                
            }
        }
    }

    function crearCard(unArray) {
        for(let event of unArray){
            contenedorPrincipal.innerHTML += createCard (event)
        }
    }
    document.onload = crearCard (data.events); 
