//simple function
function msg(){
    document.write("Hello and welcome");
}

// function with arguments
 function msg(name){
    document.write("Hello" +name);
 }
 msg('Uttam');

 // function with return value
 function getMsg(){
    return 'Hello how are you?';
 }

 //function object
 new function([arg1,arg2,arg3....arg-n],functionBody);