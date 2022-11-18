
"use strict";
import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";
(function() {
const persons = [
new Person("Ana Smith",new Date(19918,12,15)),
new Person("Bob Jone",new Date(1945,11,16)),
new Person("Carlos Slim Helu",new Date(1976,9,24))
];
persons.forEach(p => console.log(p.toString()));
// for(const person of persons) {
//     console.log(person.toString());
// }


const Emp=new Employee("Jim Hanson",null,245990.00,null);
Emp.doJob("Software Engineer");
})();
