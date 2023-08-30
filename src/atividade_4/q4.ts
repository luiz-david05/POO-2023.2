class Radio {
    volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio(3);
r.volume = 10;