//=>class declaration
class Employee{
    //intializing an object
    constructor(id,name){
           this.id=id;
           this.name=name;
    }
    //declaring method
    detail(){
        document.write(this.id+" "+this.name);
    }
}
//passing object to a variable
var e1 = new Employee(1,"Tony");
var e2 = new Employee(2,"Neha");
e1.detail();
e2.detail();

//=>class declaration -Hoisting

//passing object to variable
var e1 = new Employee(1,"Tony");
var e2 = new Employee(2,"Neha");
e1.detail();
e2.detail();

//declaration of class
class Employee{
    //intializing an object
    constructor(id,name){
           this.id=id;
           this.name=name;
    }
    //declaring method
    detail(){
        document.write(this.id+" "+this.name);
    }
}
/** class declaration do not support hoisting but functions have this property and
also the re-declaration of a class is not possible in the javascript.
*/

//=> Class Expressions
/** It is not mandatory to use the class name instead 
 -we can use the class expression.
*/

var Emp = class{
     
    constructor(id,name){
         this.id = id;
         this.name = name;
    }
}
document.write(Emp.name);
/**we can redeclare a class using the class expression by assigning it to the
   same name variable. 
*/