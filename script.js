let btn = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let mensajeElement = document.querySelector('#mensaje');

btn.addEventListener('mouseover', movimiento);
btn2.addEventListener('click', mostrarGracias);

function movimiento() {
    if (btn.classList.contains('posicion_normal')) {
        btn.classList.replace('posicion_normal', 'move1');
    } else if (btn.classList.contains('move1')) {
        btn.classList.replace('move1', 'move2');
    } else if (btn.classList.contains('move2')) {
        btn.classList.replace('move2', 'move3');
    } else if (btn.classList.contains('move3')) {
        btn.classList.replace('move3', 'move4');
    } else if (btn.classList.contains('move4')) {
        btn.classList.replace('move4', 'move5');
    } else if (btn.classList.contains('move5')) {
        btn.classList.replace('move5', 'move6');
    } else if (btn.classList.contains('move6')) {
        btn.classList.replace('move6', 'move7');
    } else if (btn.classList.contains('move7')) {
        btn.classList.replace('move7', 'move8');
    } else if (btn.classList.contains('move8')) {
        btn.classList.replace('move8', 'move9');
    } else if (btn.classList.contains('move9')) {
        btn.classList.replace('move9', 'move10');
    } else if (btn.classList.contains('move10')) {
        btn.classList.replace('move10', 'move11');
    } else if (btn.classList.contains('move11')) {
        btn.classList.replace('move11', 'move12');
    } else if (btn.classList.contains('move12')) {
        btn.classList.replace('move12', 'move13');
    } else if (btn.classList.contains('move13')) {
        btn.classList.replace('move13', 'move14');
    } else if (btn.classList.contains('move14')) {
        btn.classList.replace('move14', 'move15');
    } else if (btn.classList.contains('move15')) {
        btn.classList.replace('move15', 'move16');
    } else if (btn.classList.contains('move16')) {
        btn.classList.replace('move16', 'move17');
    } else if (btn.classList.contains('move17')) {
        btn.classList.replace('move17', 'move18');
    } else if (btn.classList.contains('move18')) {
        btn.classList.replace('move18', 'move19');
    } else if (btn.classList.contains('move19')) {
        btn.classList.replace('move19', 'move20');
    } else if (btn.classList.contains('move20')) {
        btn.classList.replace('move20', 'posicion_normal');
    }
}
function mostrarGracias() {
    mensajeElement.textContent = 'Hola esposa :))';
}

