var i = 0; 
var txt = 'This a type writer effect demo.';
var speed = 50;
function typeWriter() 
{ 
  if (i < txt.length)
  { 
    document.getElementById("typeeffect").innerHTML += txt.charAt(i); 
    i++;
    setTimeout(typeWriter, speed); 
  }
}