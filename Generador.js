'use strict'
//   Puede que al momento de llamar a las acciones del plan se instancien las acciones
//   No instanciar si no pasar estado actual del personaje
//   Personajes en acciones y metas es un arreglo de personajes

//Constantes Globales:

const Ubicaciones = ["Playa", "Oficina", "Pentagono", "Calle principal de la ciudad", "cafeteria"]

const Escondites = ["Cueva", "Sotano de un edificio", "En la parte trasera de un restaurante", "Camion abandonado de carga"]

const Perfiles = [
        { Ocupacion: "Ingeniero de seguridad", ObjetoValioso: "Computadora Gamer"},
        { Ocupacion: "Hacker", ObjetoValioso: "Servidor privado"},
        { Ocupacion: "Presidente", ObjetoValioso: "Boletos de viaje"},
        { Ocupacion: "Espia", ObjetoValioso: "Lingotes de oro"}
    ]	

const EmocionesPositivas = ["Admiracion", "Amor", "Respeto", "Empatia", "Gratitud"]

const EmocionesNegativas = ["Resentimiento", "Odio", "Rencor", "Envidia", "Vindicativo"]

const PersonalidadesNegativas = ["Vengativa", "Antisocial", "Interesado", "Agresivo", "Codisioso"]

const PersonalidadesPositivas = ["Protector", "Leal", "Sincero","Simpatico","Confiado","Divertido"]

const Nombres = ["Rodrigo", "Ivan", "Juan", "Carlos"]

const accionesInstrucciones = ["Recordó", "le dijo","le comentó", "le mencionó","llevo acabo"]


class Accion {
    constructor(nombre,personajes) {
        this.nombre = nombre;
        this.personajes = personajes;
        this.preCondicion = ()=>{}
        this.postCondicion = ()=>{}
        this.textosAlternativos = []
      }
}

class Meta {
    constructor(nombre,personajes) {
        this.nombre = nombre;
        this.personajes = personajes;
        this.preCondicion = ()=>{}
        this.plan = ()=>{}
      }
}

class Personaje {

    constructor(nombre,ubicacion,ubicacionDestino,emocionHaciaOtroPersonaje,personajeQueRecibeEmocion,personalidad,ocupacion,
                tieneCodigo,fuenteConfiable,objetoValiosoPersonaje,informancionRelevante,IntruccionesSeguir,Rol) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.ubicacionDestino = ubicacionDestino;
        this.emocionHaciaOtroPersonaje = emocionHaciaOtroPersonaje;
        this.personajeQueRecibeEmocion = personajeQueRecibeEmocion;
        this.personalidad = personalidad;
        this.ocupacion = ocupacion;
        this.tieneCodigo = tieneCodigo;
        this.fuenteConfiable = fuenteConfiable;
        this.objetoValiosoPersonaje = objetoValiosoPersonaje;
        this.informancionRelevante = informancionRelevante;
        this.IntruccionesSeguir = IntruccionesSeguir;
        this.Rol = Rol; 
      }
}

