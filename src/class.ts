// export class User {
  
//     constructor(
//         public name:string,
//         public age:number,
//         public alamat:string
        
//         ) {

//     }
// }

// let user = new User("rasdi abdulrohman",25, "bogor");


// export class Siswa {
//     constructor(public name:string, private kelas:string){

//     }
// }

// let siswa = new Siswa("rasdi abdulrohman","8D");
// // console.log(siswa);


// export class Mahasiswa {
//     constructor(
//         public name:string,
//         public angkatan:number,
//         public jurusan:string
//     ){
    
//     }
// }

// let mahasiswa = new Mahasiswa("rasdi",2016,'teknik informatika');

// console.log (mahasiswa);

//inheritens


export class User {
    name:string;
    constructor (name:string, public age:number){
        this.name = name;
    }
    setName (value:string):void {
        this.name = value;
    }
    getName = ():string => {
        return this.name;
    }
}

//public = bisa diakses disemua kelas
// protected = hanya bisa diaksess dari kelas tersebut dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
//setter dan getter

class Admin extends User {
    read:boolean = true;
    write:boolean = true;
    phone:string;
    private _email : string = "";
    static getROleName:string = "Admin 1"


    constructor(phone:string, name:string, age:number){
        super(name,age);
        this.phone = phone;

    }
    static getNameRole() {
        return "hei rasdi";
    }

    getRole(): { read:boolean, write:boolean}{
        return {
            read:this.read,
            write:this.write
        };
    };
    set email(value:string){

        if(value.length <5){
            this.email = "email salah"
        }else {
            this._email = value;
        }

    }
    get email():string {
        return this._email;
    }
}

let hello = Admin.getNameRole();
console.log(hello);
