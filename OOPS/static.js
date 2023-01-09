//static method

class Test{
    static display(){
        return "Hello and Welcome";
    }
}
document.write(Test.display());

// multiple static method
class Test{
    static display(){
        return "Hello and Welcome";
    }

    static display1(){
        return "Static method invoked";
    }
}
document.write(Test.display());
document.write(Test.display1());

// same name multiple static method

class Test{
    static display(){
        return "Hello and Welcome";
    }

    static display(){
        return "Static method invoked";
    }
}
document.write(Test.display());
