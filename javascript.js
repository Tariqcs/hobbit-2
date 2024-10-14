let llistajugadors = []

function Afegirjugador() {

let jugador = document.getElementById("camp_nou").value;
document.getElementById("jugadors").innerHTML += `${jugador}<br>`

llistajugadors.push(jugadors)

}

function seguentjugador() {

document.getElementById("jugador_seguent").innerHTML =llistajugadors[0];
let jugador_actual = llistajugadors.shift()

llistajugadors.push(jugador_actual);

document.getElementById("jugadors").innerHTML= " ";
}

for (let i = 0;i<llistajugadors.length,i+) {

document.getElementById("jugadors").innerHTML += `${llistajugadors[i]} <br>`



}