var coffeeMachine = null;

class CoffeeMachine {
    coffeeTank = 300;
    waterTank = 1000;
    capIsFull = false;
    coffeeValue = document.getElementById("coffeeTankValue");
    screen = document.getElementById("msg");
    msg = ``;
    start() {
        this.screen.innerText = "Ready";
    }
    finish() {
        this.coffeeTank = 0;
        this.waterTank = 0;
        if (this.capIsFull === true) {
            this.drinkCoffee();
            document.getElementById('capTank').addEventListener('transitionend', () => {
                this.screen.innerText = "";
            });
        } else {
            this.screen.innerText = "";
        }
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
        document.getElementById('capTank').addEventListener('transitionrun', () => {
            if (this.capIsFull === true) {
                this.screen.innerText = `You drinking your "Americano"`;
            } else {
                this.screen.innerText = `Create your "Americano"`;
            }
        })
        document.getElementById('capTank').addEventListener('transitionend', () => {
            this.screen.innerText = `Your "Americano" was done`;
        })
        this.indicate();
        this.fillCap();
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
        document.getElementById('capTank').addEventListener('transitionrun', () => {
            if (this.capIsFull === true) {
                this.screen.innerText = `You drinking your "Espresso"`;
            } else {
                this.screen.innerText = `Create your "Espresso"`;
            }
        })
        document.getElementById('capTank').addEventListener('transitionend', () => {
            this.screen.innerText = `Your "Espresso" was done`;
        })
        this.indicate();
        this.fillCap();
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
        document.getElementById('capTank').addEventListener('transitionrun', () => {
            if (this.capIsFull === true) {
                this.screen.innerText = `You drinking your "Double Espresso"`;
            } else {
                this.screen.innerText = `Create your "Double Espresso"`;
            }
        })
        document.getElementById('capTank').addEventListener('transitionend', () => {
            this.screen.innerText = `Your "Double Espresso" was done`;
        })
        this.indicate();
        this.fillCap();
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
    fillCap() {
        const cap = document.getElementById('capTank');
        cap.style.boxShadow = `0px 0px 3px 3px gray, inset 0px ${Number.parseInt(window.getComputedStyle(cap).height) * 0.1}px 0px 0px aliceblue`;
        cap.innerText = 'Drink me!';
        cap.addEventListener('transitionstart', () => {
            this.capIsFull = true;
        })
    }
    drinkCoffee() {
        const cap = document.getElementById('capTank');
        cap.style.boxShadow = `0px 0px 3px 3px gray, inset 0px ${Number.parseInt(window.getComputedStyle(cap).height) + Number.parseInt(window.getComputedStyle(cap).paddingTop)}px 0px 0px aliceblue`;
        cap.innerText = '';
        cap.addEventListener('transitionend', () => {
            this.capIsFull = false;
            this.start();
        })
    }
}
document.getElementById("on-off").addEventListener('click', (event) => {
    if (coffeeMachine === null) {
        coffeeMachine = new CoffeeMachine();
        document.body.getElementsByClassName("iconStyle")[0].classList.add('iconStyleBlue');
        coffeeMachine.start();
        coffeeMachine.indicate();
    } else {
        document.body.getElementsByClassName("iconStyle")[0].classList.remove('iconStyleBlue');
        coffeeMachine.finish();
        coffeeMachine.indicate();
        coffeeMachine = null;
    }
})

document.getElementById("Americano").addEventListener('click', (event) => {
    if (coffeeMachine.capIsFull === false) {
        this.coffeeMachine.americano();
    }
})
document.getElementById("Espresso").addEventListener('click', (event) => {
    if (coffeeMachine.capIsFull === false) {
        this.coffeeMachine.espresso();
    }
})
document.getElementById("DoubleEspresso").addEventListener('click', (event) => {
    if (coffeeMachine.capIsFull === false) {
        this.coffeeMachine.doubleespresso();
    }
})
document.getElementById("fillWater").addEventListener('click', (event) => {
    this.coffeeMachine.fillWater();
})
document.getElementById("fillCoffee").addEventListener('click', (event) => {
    this.coffeeMachine.fillCoffee();
})
<<<<<<< HEAD
document.getElementById("capTank").addEventListener('click', (event) => {
    this.coffeeMachine.drinkCoffee();
=======
document.getElementById("on-off").addEventListener('click', (event) => {
    window.close();
>>>>>>> 6a706e98a39e1a44c7de9886147dc9608c342a93
})


