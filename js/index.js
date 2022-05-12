var i = 0; 
var txt = 'Consult the theoretical contents on the preferred names in organic chemistry at www.nomenclaturaquimica.com';
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