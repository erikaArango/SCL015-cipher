// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {  //deberia ser un objeto
    expect(typeof cipher).toBe('object'); //se espera sea un objeto
  });

describe('cipher.encode', () =>{ 

    it('should be a function', () => {  //deberia ser una funcion
      expect(typeof cipher.encode).toBe('function');//se espera que  cipher.encode sea un a funcion
    });

    it('deberia retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{

      expect(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG')
    }
    )
  }
    );  

    describe('cipher.decode', () =>{ 

      it('should be a function', () => {  //deberia ser una funcion
        expect(typeof cipher.decode).toBe('function');//se espera que  cipher.encode sea un a funcion
      });
  
      it('deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{

        expect(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
      }
      )

    }
      );     

  
}
  );


  


