import cipher from './cipher.js';

//declaro las variables de las paginas que voy a trabajar
const pagInicio = document.getElementById("paginaInicio");
const pagCifrado = document.getElementById("paginaCifrado");


//estoy ocultando la segunda pagina
pagCifrado.style.display = "none"

//estoy dando funcionalidad al boton iniciar - hago que aparezca pa pagina 2
const iniciar = document.getElementById("bIniciar");
iniciar.addEventListener("click",function() {
 pagInicio.style.display="none";
 pagCifrado.style.display="block";
})
  
//FUNCIONALIDAD BOTON CIFRAR
 const btnCifrado = document.getElementById("botonCifrar") //metodo
 btnCifrado.addEventListener("click",function()  {

//  OFFSET    
 let offsetInput= document.getElementById("offsetInput").value 


// STRING     
 let string = document.getElementById("string").value
//paso todo a mayuscula
 string = string.toUpperCase();


   
 //Le voy a decir que haga con el offset y el input
  if (offsetInput == "" || string == "" || offsetInput < 0 ) {
      alert ("ingrese los datos correctamente")
  }
  else {
      
      const mensajeFinal = cipher.encode(offsetInput,string)
      

  //aqui tomo el elemento y lo mando a la cajita del mensaje final.  les estoy diciendo que  incerte(inner)lo que hay en el cipher
  document.getElementById("mensajefinalDescifrado").innerHTML = mensajeFinal
}

 })
 //FUNCIONALIDAD BOTON DESCIFRAR
 const btnDescifrar = document.getElementById("botonDescifrar")
 btnDescifrar.addEventListener("click",function()  {

 // OFFSET
 const offsetInput= document.getElementById("offsetInput").value 
 
 //STRING
 let string = document.getElementById("string").value
 // paso a mayuscula con el  METODO toUpperCase
 string = string.toUpperCase();


//Le voy a decir que haga con el offset y el input
 if (offsetInput == "" || string == "" || offsetInput < 0 ) {     
    alert ("ingrese los datos correctamente")
 }
 else {const mensajeFinal = cipher.decode(offsetInput,string)
 document.getElementById("mensajefinalDescifrado").innerHTML = mensajeFinal
}
})

//FUNCIONALIDAD BOTON LIMPIAR
 const btnLimpiar = document.getElementById("botonLimpiar")
 btnLimpiar.addEventListener("click", function(){ location.reload()})
 



