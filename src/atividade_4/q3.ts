class Hotel {
    qtdReservas: number = 0;

    constructor(qtdReservas: number) {
        this.qtdReservas = qtdReservas;
    }

    addReserva(): void {
        this.qtdReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.qtdReservas);