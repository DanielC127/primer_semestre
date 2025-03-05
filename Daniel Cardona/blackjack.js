// Inicialización de variables
let jugador1 = 0;
let jugador2 = 0;
let turnos = 3;

// Juego por 3 turnos
for (let i = 1; i <= turnos; i++) {
    console.log(`Turno ${i}:`);

    // Generar número aleatorio para el jugador 1
    let carta1 = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
    jugador1 += carta1;
    console.log(`Jugador 1 saca: ${carta1}. Total acumulado: ${jugador1}`);

    // Generar número aleatorio para el jugador 2
    let carta2 = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
    jugador2 += carta2;
    console.log(`Jugador 2 saca: ${carta2}. Total acumulado: ${jugador2}`);
}

// Determinar el resultado
console.log(`\nTotal final del Jugador 1: ${jugador1}`);
console.log(`Total final del Jugador 2: ${jugador2}`);

if (jugador1 > jugador2) {
    console.log("¡Jugador 1 gana!");
} else if (jugador2 > jugador1) {
    console.log("¡Jugador 2 gana!");
} else {
    console.log("Es un empate.");
}
