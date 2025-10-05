var i = 0; 
var txt = 'Consult you the theoretical contents at web www.nomenclaturaquimica.com';
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