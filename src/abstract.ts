abstract class vehicle {
    abstract wheels:number ;

    start():void {
        console.log("brummmmm");
    }
}

class Car extends vehicle {
    wheels:number = 4;
}

class Motor extends vehicle {
    wheels:number = 2
}

let car = new Car();
console.log (car.wheels);

let motor = new Motor();
console.log(motor.wheels);
motor.start();