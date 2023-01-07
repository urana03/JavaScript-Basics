// alert method
function msg(){
    alert("JavaScript World");
}

// confirm method
 var v = confirm('Are you sure?');
 if(v==true){
    alert("ok");
 }
 else{
    alert("cancel");
 }

 //prompt 
 var v = prompt("Who are you?");
 alert("I am" +v);

 //open

 function msg(){
    open("https://www.facebook.com")
 }

 //setTimeOut
 function msg(){
setTimeout(
function(){
alert("Welcome to Javatpoint after 2 seconds")
},2000);
}