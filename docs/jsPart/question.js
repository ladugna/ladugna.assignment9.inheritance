"use strict"
//Assignment_9
// //Question#1
 //Object.create(…) method

const Person={
  name:"",
  	dateOfBirth:null,
  getName:function(){
        return this.name;
    },
  setName:function(newName){
    this.name=newName;
   }
};
const john=Object.create(Person);
console.log(john)
//console.log(john.__proto__);
//john.name="john1";
john.setName("john");
john.dateOfBirth=new Date(2014,3,4);
console.log(john)
//console.log(john.__proto__);
console.log(`The person's name is ${john.name}\n${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);
console.log(`The person's name is ${john.name}\n${john.name} was born on ${john.dateOfBirth}`);
 console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${new Intl.DateTimeFormat().format(john.dateOfBirth)}`);
 console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${john.dateOfBirth.toISOString()}`);


 //Question#2
 //Object.create(…) method
 const employee=Object.create(Person)
 employee.salary=0.0;
 employee.hireDate=new Date();
 //“[Employee’s name] is a [jobTitle] who earns $[salary]”
//e.g. Anna is a Programmer who earns $249,995.50 

 employee.doJob=function(jobTitle){
 
  console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`)
 };
 const anna=Object.create(employee);
anna.setName("Anna");
anna.salary=249995.50;
anna.doJob("Programmer");

// // Alternative syntax using Object.create(proto, [propsObjects])
// const employee2 = Object.create(person, {
//   salary: {
//       writable: true,
//       configurable: true,
//       enumerable: true,
//       value: 0.0
//   },
//   hireDate: {
//       writable: true,
//       configurable: true,
//       enumerable: true,
//       value: new Date()
//   }
// });


// employee2.doJob = function(jobTitle) {
// console.log(`${this.getName()} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(this.salary)}`);
// }
// const anna2 = Object.create(employee2);
// anna2.setName("Anna2");
// anna2.salary = 249995.50;
// anna2.doJob("Programmer2");


//Question#3
//using constructor person
function person(name,dateOfBirth){
  this.name=name;
  this.dateOfBirth=dateOfBirth;
}

person.prototype.toString=function(){
  //Name: John, DateOfBirth: 1998-12-10
 return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}- ${this.dateOfBirth.getMonth()+1} -${this.dateOfBirth.getDate()}`
}
const person1=new person("Peter",new Date(1985,10,10));

console.log(person1.toString());

 
 
 