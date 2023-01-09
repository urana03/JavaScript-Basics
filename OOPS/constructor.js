// constructor method

class Employee{
    constructor(){
        this.id=1;
        this.name="Karl";
    }
}
var emp = new Employee();
document.write(emp.id +" "+ emp.name);

// constructor using super keyword

class Company{
    constructor(){
        this.company = "BridgeLabz";
    }
}
class Employee extends Company{
    constructor(){
        super();
        this.id =  id;
        this.name = name;
    }
}
var emp = new Employee();
document.write(emp.id+emp.name+emp.company)