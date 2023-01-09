//=> prototype in javascript
class Employee{
    constructor(firstName,lastName){
           this.firstName = firstName;
           this.latName = lastName;
    }
}
Employee.prototype.fullname = function(){

    return this.firstName+" "+this.latName;
}

var e1 = new Employee("Raju","Kumar");
var e2 = new Employee("Raja","Warring");
// using prototype function to get the full-name
document.write(e1.fullname()+"<br/>");
document.write(e2.fullname());

//=> adding new property to a constructor function

function Employee(firtName,lastName){
       this.firstName = firtName;
       this.lastName = lastName;
}

Employee.prototype.company = "JavaGarh";
 
var Employee1 = new Employee("Jonas","Williams");
var Employee2 = new Employee("Karl","Jung");

document.write(Employee1.firstName + Employee1.lastName + Employee1.company);
document.write(Employee2.firstName + Employee2.lastName + Employee2.company);
