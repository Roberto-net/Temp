var coffeeMachine;

class CoffeeMachine {
    coffeeTank = 300;
    waterTank = 1000;
    coffeeValue = document.getElementById("coffeeTankValue");
    screen = document.getElementById("msg");
    msg = ``;
    start() {
        this.screen.innerText = "Ready";
    }
    indicate() {
        const waterIndicator = document.getElementById("waterTank");
        const coffeeIndicator = document.getElementById("coffeeTank");
        const waterTitle = document.getElementById("waterTankValue");
        const coffeeTitle = document.getElementById("coffeeTankValue");
        waterTitle.innerText = `${this.waterTank} ml`;
        coffeeTitle.innerText = `${this.coffeeTank} gram`;
        coffeeIndicator.style.boxShadow = `inset 0px ${(Number.parseInt(window.getComputedStyle(coffeeIndicator).height) / 300) * (300 - this.coffeeTank)}px 0px 0px rgb(255, 255, 255)`;
        waterIndicator.style.boxShadow = `inset 0px -${(Number.parseInt(window.getComputedStyle(waterIndicator).height) / 1000) * this.waterTank}px 0px 0px rgb(49, 149, 243)`;
    }
    americano() {
        console.log(this);
        this.screen.innerText = ``;
        if (this.coffeeTank < 15) {
            this.screen.innerText = this.alertCoffee();
            return;
        }
        if (this.waterTank < 100) {
            this.screen.innerText = this.alertWater();
            return;
        }
        this.coffeeTank -= 15;
        this.waterTank -= 100;
        this.screen.innerText = `Your "Americano" was done`;
        this.indicate();

    }
    espresso() {
        this.screen.innerText = ``;
        if (this.coffeeTank < 7) {

            this.screen.innerText = this.alertCoffee();
            return;
        }
        if (this.waterTank < 30) {
            this.screen.innerText = this.alertWater();
            return;
        }
        this.coffeeTank -= 7;
        this.waterTank -= 30;
        this.screen.innerText = `Your "Espresso" was done`;
        this.indicate();
    }
    doubleespresso() {
        this.screen.innerText = ``;
        if (this.coffeeTank < 15) {
            this.screen.innerText = this.alertCoffee();
            return;
        }
        if (this.waterTank < 60) {
            this.screen.innerText = this.alertWater();
            return;
        }
        this.coffeeTank -= 15;
        this.waterTank -= 60;
        this.screen.innerText = `Your "Double Espresso" was done`;
        this.indicate();

    }
    fillCoffee() {
        this.coffeeTank = 300;
        this.screen.innerText = `Coffee tank was filled`;
        this.indicate();
    }
    fillWater() {
        this.waterTank = 1000;
        this.screen.innerText = `Water tank was filled`;
        this.indicate();
    }
    alertCoffee() {
        return "Please fill coffee tank";
    }
    alertWater() {
        return "Please fill water tank";
    }
}
document.getElementById("on-off").addEventListener('click', (event) => {
    this.coffeeMachine = new CoffeeMachine();
    this.coffeeMachine.start();
    this.coffeeMachine.indicate();
})

document.getElementById("Americano").addEventListener('click', (event) => {
    this.coffeeMachine.americano();

})
document.getElementById("Espresso").addEventListener('click', (event) => {
    this.coffeeMachine.espresso();
})
document.getElementById("DoubleEspresso").addEventListener('click', (event) => {
    this.coffeeMachine.doubleespresso();
})
document.getElementById("fillWater").addEventListener('click', (event) => {
    this.coffeeMachine.fillWater();
})
document.getElementById("fillCoffee").addEventListener('click', (event) => {
    this.coffeeMachine.fillCoffee();
})
document.getElementById("on-off").addEventListener('click', (event) => {
    window.close();
})


