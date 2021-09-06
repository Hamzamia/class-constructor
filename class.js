class Support {
    name;
    address;
    designation = 'support we developer';

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    startSession() {
        console.log(this.name, 'from ', this.address, 'start a seesion');
    }
}
const aamir = new Support('amir khan', 'BD');
// console.log(aamir);
const salman = new Support('solaiman khan', 'Dhubai');
salman.startSession();
aamir.startSession();