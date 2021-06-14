import ILaptop from "./ILaptop";

class BaseLaptop <T> implements ILaptop<T> {
    name:string;
    type:T;
    withNumeric:boolean;
    withTouchButton:boolean;

    constructor(
        name:string, 
        type:T, 
        numeric:boolean,
        touchButton:boolean
        ){
            this.name =name;
            this.type = type;
            this.withNumeric = numeric;
            this.withTouchButton = touchButton;
        }
}