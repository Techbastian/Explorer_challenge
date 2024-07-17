

function seguimientoAstronauta() {

    class Astronauta {

        constructor(nombre, edad, viajes, planetas_visitados) {
            this.nombre = nombre;                           // type String
            this.edad = edad;                               // type Number
            this.num_viajes = viajes;                       // type Number
            this.planetas_visitados = planetas_visitados;   // type Array
        }

        hasTraveledTo(planet) {
            /* Este método evalua si el astronauta viajó al planeta recibido en "planet"
               de ser así devuelve un mensaje que dirá 
               "El astronauta de nombre (nombre del astronauta) si ha viajado al planeta (planet)"
               de lo contrario devuelve un mensaje que dirá
               "El astronauta de nombre (nombre del astronauta) no ha viajado al planeta (planet)"
            */

                                /*  Tú código aquí abajo */
            let mensaje = "";
            let array = this.planetas_visitados;
            if(array.includes(planet)){
                mensaje = `El astronauta ${this.nombre} si ha viajado al planeta ${planet}`;
            }else{
                mensaje = `El astronauta ${this.nombre} no ha viajado al planeta ${planet}`;
            }

            return mensaje;
        }


        addTravel(new_planets) {
            /* Este metodo recibe un arreglo con los nuevos planetas que el astronauta ha visitado 
               Ej. ["Marte", "A-113"] y lo que debe hacer es agregarlo a las que ya se encuentran en
               planetas_visitados y actualizar el numero de viajes que éste ha realizado 
               (dato que se encuentra en num_viajes)
            */

            
            //  Nota: para que un astronauta pueda viajar, debe ser mayor de 18 años y menor de 50 años
           

                         /*  Tú código aquí abajo */
            let arreglo = this.planetas_visitados;
            if(this.edad >= 18 && this.edad <= 50){
                
            
            new_planets.forEach(element => {
                arreglo.push(element);
                this.num_viajes++;
            });
            }            

            return arreglo;
            
        }

    }

    return Astronauta;

}

const Astronauta = seguimientoAstronauta();

// const astronauta = new Astronauta('jairo',17,3,['marte','tierra','jupiter']);
// console.log(astronauta.hasTraveledTo('neptuno'));

// console.log(astronauta.addTravel(['neptuno','urano']));
// console.log(astronauta.num_viajes);
module.exports = seguimientoAstronauta; 