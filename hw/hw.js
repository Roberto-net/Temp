var coffeMachine;

class CoffeMachine{
    coffeTank=300;
    waterTank=1000;
    coffeValue=document.getElementById("coffeTankValue");
    screen = document.getElementById("msg");
    msg=``;
    start(){
        this.screen.innerText="Ready";
        
    }
    test(){
        document.getElementById("waterTankValue").innerText=`${this.waterTank} ml`;
        document.getElementById("coffeTankValue").innerText=`${this.coffeTank} gram`;
        document.getElementById("coffeTank").style.boxShadow=`inset 0px -${(Number.parseInt(window.getComputedStyle(document.getElementById("coffeTank")).height)/300)*this.coffeTank}px 0px 0px rgb(77, 25, 25)`;
        document.getElementById("waterTank").style.boxShadow=`inset 0px -${(Number.parseInt(window.getComputedStyle(document.getElementById("waterTank")).height)/1000)*this.waterTank}px 0px 0px rgb(49, 149, 243)`;
    }
    americano(){
        console.log(this);
        this.screen.innerText=``;
        if(this.coffeTank<15){
            this.screen.innerText=this.alertCoffe();
            return;
        }
        if(this.waterTank<100){
            this.screen.innerText=this.alertWater();
            return;
        }
        this.coffeTank-=15;
        this.waterTank-=100;
        this.screen.innerText=`Your "Americano" was done`;
        this.test();

    }
    espresso(){
        this.screen.innerText=``;
        if(this.coffeTank<7){
            
            this.screen.innerText=this.alertCoffe();
            return;
        }
        if(this.waterTank<30){
            this.screen.innerText=this.alertWater();
            return;
        }
        this.coffeTank-=7;
        this.waterTank-=30;
        this.screen.innerText=`Your "Espresso" was done`;
        this.test();
    }
    doubleespresso(){
        this.screen.innerText=``;
        if(this.coffeTank<15){
            this.screen.innerText=this.alertCoffe();
            return;
        }
        if(this.waterTank<60){
            this.screen.innerText=this.alertWater();
            return;
        }
        this.coffeTank-=15;
        this.waterTank-=60;
        this.screen.innerText=`Your "Double Espresso" was done`;
        this.test();

    }
    fillCoffe(){
        this.coffeTank=300;
        this.screen.innerText=`Coffe tank was filled`;
        this.test();
    }
    fillWater(){
        this.waterTank=1000;
        this.screen.innerText=`Water tank was filled`;
        this.test();
    }
    alertCoffe(){
        return "Please fill coffe tank";
    }
    alertWater(){
        return "Please fill water tank";
    }
}
document.getElementById("on-off").addEventListener('click', (event)=>{
    this.coffeMachine= new CoffeMachine();
    this.coffeMachine.start();
    this.coffeMachine.test();
})

document.getElementById("Americano").addEventListener('click', (event)=>{
    this.coffeMachine.americano();
    
})
document.getElementById("Espresso").addEventListener('click', (event)=>{
    this.coffeMachine.espresso();
})
document.getElementById("DoubleEspresso").addEventListener('click', (event)=>{
    this.coffeMachine.doubleespresso();
})
document.getElementById("fillWater").addEventListener('click', (event)=>{
    this.coffeMachine.fillWater();
})
document.getElementById("fillCoffe").addEventListener('click', (event)=>{
    this.coffeMachine.fillCoffe();
})


