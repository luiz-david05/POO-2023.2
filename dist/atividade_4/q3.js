"use strict";
class Hotel {
    qtdReservas = 0;
    constructor(qtdReservas) {
        this.qtdReservas = qtdReservas;
    }
    addReserva() {
        this.qtdReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.qtdReservas);
