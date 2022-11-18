
"use strict";
import { Person } from "./person.js";

export class Employee extends Person{
#salary=0.0;
#hireDate=null;
constructor(name,dateOfBirth,salary,hireDate){
    super(name,dateOfBirth);
    this.#salary=salary;
    this.#hireDate=hireDate;
}
 doJob(jobTitle){
console.log(`${super.getName()} is a ${this.jobTitle} who earns ${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(this.#salary)}`);
}
}