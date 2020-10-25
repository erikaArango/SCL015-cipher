import cipher from './cipher.js';

//declaro las variables de las paginas que voy a trabajar
const pagInicio = document.getElementById("paginaIinicio");

const pagCifrado = document.getElementById("paginaCifrado");
//estoy ocultando la segunda pagina
pagCifrado.style.display = "none"

//estoy dando funcionalidad al boton iniciar - hago que aparezca pa pagina 2
const iniciar = document.getElementById("bIniciar");
iniciar.addEventListener("click",function() {
 pagInicio.style.display="none";
 pagCifrado.style.display="block";
})
 
 const btnCifrado = document.getElementById("botonCifrar") 
 btnCifrado.addEventListener("click",function()  {
  const offsetInput= document.getElementById("offsetInput").value 
  const string = document.getElementById("string").value
   
  if (offsetInput == "" || string == "" || offsetInput < 0 ) {
      alert ("ingrese los datos correctamente")
  }
  else {
      
      const mensajeFinal = cipher.encode(offsetInput,string)
      

  //aqui tomo el elemento y lo mando a la cajita del mensaje final.  les estoy diciendo que  incerte(inner)lo que hay en el cipher
  document.getElementById("mensajefinalDescifrado").innerHTML = mensajeFinal
};



 })
 const btnDescirar = document.getElementById("botonDescifrar")
 botonDescifrar.addEventListener("click",function()  {
 const offsetInput= document.getElementById("offsetInput").value 
 const string = document.getElementById("string").value
 console.log(offsetInput + string) 
 if (offsetInput == "" || string == "" || offsetInput < 0 ) {
    alert ("ingrese los datos correctamente")
 }
 else {const mensajeFinal = cipher.decode(offsetInput,string)
 document.getElementById("mensajefinalDescifrado").innerHTML = mensajeFinal
}


 })



 const limpiar = ()=>{location.reload}


 



