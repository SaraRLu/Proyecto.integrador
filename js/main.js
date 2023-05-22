const nameStudent='Sara Minelly Rojas Lujan'
const nameProject= 'Proyecto Integrador: Juguetería Cósmica'
document.title=`${document.title} - ${nameStudent} - ${nameProject}`;


// carrito

const car = document.querySelector('.carro');
const info = document.querySelector('.cart-modal-container');
let onAndOff = true 


function open() {
    car.classList.toggle('car',onAndOff);
    info.classList.toggle('informacionVisible' , onAndOff);
    info.classList.toggle('cart-modal-container' , !onAndOff);
    onAndOff = !onAndOff;
};

car.addEventListener('click', open);

function closed() {
    car.classList.remove('car');
    info.classList.remove('informacionVisible');
    info.classList.add('cart-modal-container');
    onAndOff = true;
};

//cada vez que se precione tecla//
window.addEventListener('keydown',function(ev){
    if (ev.key=== 'Escape') {
        console.warn('cerrar modal');
        closed()
    }
}
);

const closedX = document.querySelector('.cerrar');
closedX.addEventListener('click' , closed);


// evento de tabla
const table = document.querySelector('.table');
table.addEventListener('click', (ev)=>{
if (ev.target.classList.contains('papelera')){
    console.log('Botón de eliminar presionado');
        console.log(ev.target);
}
});

const body= document.querySelector('body')
body.addEventListener("click",(ev)=>{
    if(ev.target !== car && !car.contains(ev.target)) {
        closed()
    }
});


// // busqueda provicional---- sigo en construccion

// const buttonSearch = document.getElementById('boton-buscar');
// const inputTermino = document.getElementById('termino');

// buttonSearch.addEventListener('click', function() {
// const search = inputTermino.value;
// performSearch(search);
// });

// function performSearch(termino) {

// // sigo construyendo la logica para la busqueda

// console.log('Realizando búsqueda: ' + termino);
// }