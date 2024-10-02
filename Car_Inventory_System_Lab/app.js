'use strict';

class Car {
    name;
    model;
    year;
    price;
    constructor(nameIN, modelIN, yearIN, priceIN) {
        this.name = nameIN;
        this.model = modelIN;
        this.year = yearIN;
        this.price = priceIN;
    }
    calculatePrice() {
        var age = 2024 - this.year;
        var deprec = age * 500;
        var result = 0;
        if (this.price - deprec > 0) {
            result = this.price - deprec;
        }
        return (result);
    }
}
class CarManager {
    cars = [];
    constructor() {
    }
    addCar(nameIN, modelIN, yearIN, priceIN) {
        this.cars.push(new Car(nameIN, modelIN, yearIN, priceIN));
    }
    displayCars() {
        let output = document.getElementById('carList')
        output.innerHTML = "";
        for (let x = 0; x < this.cars.length; x++) {
            output.innerHTML += `${this.cars[x].year} ${this.cars[x].name} ${this.cars[x].model} for $${this.cars[x].price} <br>`;
            console.log(`${this.cars[x].year} ${this.cars[x].name} ${this.cars[x].model} for $${this.cars[x].price}`);
        }
    }
    showTotalPrice() {
        var totalPrice = 0;
        for (let x = 0; x < this.cars.length; x++) {
            totalPrice += this.cars[x].calculatePrice();
        }
        document.getElementById('totalPrice').innerHTML = `${totalPrice}`;
    }
}

const carArray = new CarManager();
function addCar() {
    alert("Car Added");
    carArray.addCar(document.getElementById('carName').value, document.getElementById('carModel').value, document.getElementById('carYear').value, document.getElementById('carPrice').value);
    carArray.displayCars();
}
function showTotalPrice() {
    carArray.showTotalPrice();
}
window.onload = function () {
    carArray.displayCars();
};