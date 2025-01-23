//Clase: molde para hacer objetos
class Persona {

    //Atributos: Nombre y Edad
    //Constructor: instancia objeto desde una clase
    constructor(nombre, edad){
        //Al atributo se le asigna parámetro enviado desde instanciación
        this.nombre = nombre;
        this.edad = edad;
    }

    //Método de clase
    saludar(nombre){
        console.log(`${this.nombre} Dice: Hola! Cómo estás, ${nombre}?`)
    }

    //Método de clase
    decirEdad(nombre){
        console.log(`${this.nombre} dice: Yo tengo ${this.edad} años, estimado/a ${nombre}`) //nombre sin el this es lo que se está pasando por parámetro
    }
}


//Instanciaciones de objeto persona
const  persona1 = new Persona('Pedro', 25)
const  persona2 = new Persona('Patricia', 25)


//De las instancias se usan los métodos propios de la clase
persona1.saludar('Ana') //Pedro dicce: Hola! Cómo estás, Ana?

persona2.saludar('Emilio') //parámetro = Emilio

persona1.decirEdad('Ana')

persona2.decirEdad('Emilio')