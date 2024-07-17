



function getProperty(object, property){
   /* 
      -- La función recibe dos argumentos.
      -- El argumnento llamado "object", recibe un objeto.
      -- El argumento llamado "property", recibe el nombre de una
         propiedad en forma de string Ej. "name"
   */

   /*   
       Al final, la función debe devolver el valor que posee la propiedad 
       especificada dentro del objeto
   */

   /*
                                    -- EJEMPLO --
        *getProperty({
         name: "Pedro",
         age: 30
        }, "name") la función debe devolver "Pedro". 
        
        *getProperty({
         pets: ['Gato', 'Perro', 'Conejo'],
         owner: "Pedro Picapiedra"
        }, "pets") la función debe devolver ['Gato', 'Perro', 'Conejo']. 
        
   */

                              /*  Tú código aquí abajo */
   if(object[property]){
      return object[property];
   }else{
      return 'no existe la propiedad';
   }

}
// let clave = prompt('por favor ingrese una clave: ');
// let objeto1 = {name:'sebastian',age:25,carrer:'enginer'};
// if(objeto1[clave]){
//    console.log(objeto1[clave]);
// }else{
//    console.log('no existe');
// }

// module.exports = getProperty; 