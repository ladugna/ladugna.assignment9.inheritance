 
 
 "use strict";
 export class Person{
    #name="";
    #dateOfBirth=null;
    constructor(name,dateOfBirth){
        this.#name=name;
        this.#dateOfBirth=dateOfBirth;
    }
    getName(){
        return this.#name;
    }
    setName(newName){
        this.#name=newName;
    }
    getDateOfBirth(){
        return this.#dateOfBirth;
    }
    setDateOfBirth(newDateOfBirth){
        this.#dateOfBirth=newDateOfBirth;
    }


          //optional
    // get name() { return this.#name; }
    // get dateOfBirth() { return this.#dateOfBirth; }
    // set name(value) {
    //     this.#name = value;
    // }
    // set dateOfBirth(value) {
    //     this.#dateOfBirth = value;
    // }

    toString(){
        return `Name : ${this.getName()}, Date of Birth : ${this.getDateOfBirth().getFullYear()}- ${this.getDateOfBirth().getMonth()+1} -${this.getDateOfBirth().getDate()}`;
    }
}