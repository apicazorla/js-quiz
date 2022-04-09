//type writer effect

<div id="Francisco Moreno Hueso">
</div>
var text= document.getElementById("Francisco Moreno Hueso");
var str=text.innerHTML;
text.innerHTML="";
var speed= 200;
var i= 0;

//typewriter efect 
function typeWriter() {
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout/typeWriter,speed);
    }
}
    setTimeout(typeWriter, speed);
