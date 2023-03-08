// contenedor padre de las cards
let contenedorCard = document.getElementById("contenedor-4-cards");
// variable donde se va a alojar card|
let cardsDeEventos= ""

// contenedor de los checkbox
let contenedorCheckbox = document.getElementById("contenedorCategorias");
// variable donde se va a alojar cada checkbox
let checkboxCategoria =""

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
let eventosFiltrados = []
let checkbox = document.querySelectorAll('input[type=checkbox]')
checkbox.forEach(input => {
    input.addEventListener('change', (e)=>{
        contenedorPrincipal.innerHTML = ""
        if (e.target.checked) {
            let categoriaSeleccionada = e.target.value;
            eventosFiltrados = data.events.filter(ev => {
                if (ev.category == categoriaSeleccionada) {
                    //console.log(ev.category)
                    return true;
                }
            })
            console.log(eventosFiltrados)
            for(let eF of eventosFiltrados){
                contenedorPrincipal.innerHTML += createCard (eF)
            }
        }
    })
})

// Filtro por búsqueda sobre el que estoy trabajando
let busqueda = document.querySelectorAll('input[type=search]')
// busqueda.forEach(input => {
    document.addEventListener('submit', (eb)=>{
            let palabraBusqueda = eb.target.value;
            console.log(palabraBusqueda)
            let filtroBusqueda = data.events.filter (eventobusqueda => {
                eventobusqueda.preventDefault()
                if(eventobusqueda.name == palabraBusqueda){
                console.log(eventobusqueda.name)
                return true;
                }
            })
            for(let eB of palabraBusqueda){
                crearCardParaEvento (eB)
            }
    })
// })}
// Filtro por busqueda no del todo bien
// let busqueda = document.querySelectorAll('input[type=search]')
// busqueda.forEach(input => {
//     input.addEventListener('change', (eb)=>{
//             let palabraBusqueda = eb.target.value;
//             console.log(palabraBusqueda)
//             let filtroBusqueda = data.events.filter (eventobusqueda => {
//                 eventobusqueda.preventDefault()
//                 if(eventobusqueda.category == palabraBusqueda){
//                 console.log(eventobusqueda.category)
//                 return true;
//                 }
//             })
//             for(let eB of palabraBusqueda){
//                 crearCardParaEvento (eB)
//             }
//     })
// })