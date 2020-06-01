class CoffeMachine{
    coffeTank=300;
    waterTank=1000;
    coffeMachine;
    water=document.getElementById("water");
    coffe=document.getElementById("coffe");
    screen = document.getElementById("msg");
    msg=``;
    start(){
        this.screen.innerText="Ready";
        
    }
    test(){
        this.water.innerText=`${this.waterTank}`;
        this.coffe.innerText=`${this.coffeTank}`;
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
            fillmsg=this.alertWater();
            this.screen.innerText=`${fillmsg}`;
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
    }
    fillWater(){
        this.waterTank=1000;
        this.screen.innerText=`Water tank was filled`;
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


