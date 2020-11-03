//este archivo cipher solo cifra y descifra, las demas funcionalidades las hago desde el index.js
const cipher = {    
    encode: (offset,string) => {
        //convierto el offset a entero
        offset = parseInt(offset)
        //declaro la variable mensaje
        let mensaje = ""             
        //como van a correr los caracteres de la frase o palabra for es un bucle 
        for(let i = 0; i < string.length; i++){ //.lengt es una propiedad de string    
            //voy a sacar el codigo ASCII del caracter
            const aAscii = string.charCodeAt(i);     
            //como obtener la nueva posicion en ASSCII aplico el desplazamiento la formula sobre la letra 
            let nuevaPosicion = ((aAscii - 65 + offset) % 26) + 65    
            //para  que no reemplaze el caracter de los espacios if es una condicional
            if (aAscii === 32) {nuevaPosicion = 32; }//Aqui le digo que si llega al ascii 32 lo mANTENGA  en 32 que es un espacio, que no voy a cifrar
             //convertir el ASCII a la nueva posicion
            const desdeAscii = String.fromCharCode(nuevaPosicion)    
            //agrego los caracteres al mensaje final
            mensaje += desdeAscii;          
    
        }
        return mensaje;
    },
    decode: (offset,string) => {        
        //aqui convierto el offset a entero para que js me lo tome como numero
        offset = parseInt(offset)
         //declaro la variable mensaje               
        let mensaje = "";        
        for(let i=0; i < string.length;i++){            
            //sacar codigo ASCII del caracter
            const aAscii = string.charCodeAt(i);    
            //nueva posicion es ASCII
            let nuevaPosicion = ((aAscii + 65 - offset) % 26) + 65;
            
            
            //caracter de los espacios
            if(aAscii == 32) {nuevaPosicion = 32;}
    
            
            //convertir el ASCII  a la nueva posicion
            const desdeAscii = String.fromCharCode(nuevaPosicion)
    
            //agrego los caracteres al mensaje final
            mensaje += desdeAscii;
        }
    
        return mensaje;
    }
    }
    export default cipher;
    