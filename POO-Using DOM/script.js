
class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(nombre){
        return(`${this.nombre} Dice: Hola! Cómo estás, ${nombre}?`)
    }

    decirEdad(nombre){
        return(`${this.nombre} dice: Yo tengo ${this.edad} años, estimado/a ${nombre}`) 
    }
}

function saludarYDecirEdad(){
    const nombreInput = document.getElementById('nombreInput').value;
    const edadInput = document.getElementById('edadInput').value;
    const invitadoInput = document.getElementById('invitadoInput').value;

    if(nombreInput.trim == '' || edadInput.trim() == '' || invitadoInput.trim() == ''){
        alert('Los campos son obligatorios')
        return
    }

    const persona = new Persona(nombreInput, edadInput);
    const saludo = persona.saludar(invitadoInput);
    const edadMensaje = persona.decirEdad(invitadoInput);

    const resultado = document.getElementById('res');
    resultado.innerHTML = `<p>${saludo}</p> <p>${edadMensaje}</p>`
}