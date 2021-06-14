//tipe data function


function getName(): string {
    return "hello , my name is rasdi";
}

function getAge(): number {
    return 12;
}

function printName(){

}

console.log(getName())

//functin argument
function multiple (val1:number, val2:number): number {
    return val1 * val2 ;
}

const result = multiple(10,5);
console.log(result);

//function as type

type Tambah = (val1:number, val2:number)=>number;

const Add:Tambah = (val1:number, val2:number) : number => {
    return val1+val2;
}

console.log(Add(6,10));

type Nomor = number;

const Hello:Nomor = 10;

type Nama = (val1:string, val2 :string) =>string;

const getNama:Nama = (val1:string, val2:string):string => {
    return val1+" hello " + val2;
}

console.log(getNama("rasdi","abdul"))

//default parameters
const fullName = (first:string, last:string ="abdulrohman"): string => {
    return first + "test " + last;
}

console.log(fullName("rasdi "));

//opsional parameters

const getAlamat = (nilai1:number, nilai2:number) : number =>{
    return nilai1 + nilai2;
    // return nilai1 + " " +nilai2;
}

console.log(getAlamat(20,30));