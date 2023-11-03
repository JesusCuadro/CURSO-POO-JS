class rutasDeAprendizaje{
    constructor({
        cursos = [],
        areaAprendizaje,
        liderRuta,
    }){
        this.cursos = cursos;
        this.areaAprendizaje = areaAprendizaje;
        this.liderRuta = liderRuta;
    }
}

const DesarrolloWeb = new rutasDeAprendizaje({

    cursos: ["Curso de HTML", "Curso de CSS", "Curso de JS", "Curso de REACT JS", "Curso de PHP"],
    areaAprendizaje: "Programacion",
    liderRuta: "JuanDC",

});

const MarketingDigital = new rutasDeAprendizaje({

    cursos: ["Curso de ventas", "Curso de compras", "Curso de comunicacion efectiva"], 
    areaAprendizaje: "Emprendimiento",
    liderRuta:  "Elon Musk",

});

const EnglishAcademy = new rutasDeAprendizaje({

    cursos: ["English for Devs", "English B1", "English for job"],
    areaAprendizaje: "Ingles",
    liderRuta: "Jesus",

});

class Estudiantes{
    constructor({
        nombre,
        email,
        usuario,
        twitter = undefined,
        linkedIn = undefined,
        cursosAprobados = [],
        rutasDeAprendizaje = [],
    }){

        this.nombre = nombre;
        this.email = email;
        this.usuario = usuario;
        this.redesSociales = {
            twitter: twitter,
            linkedIn: linkedIn
        };

        this.cursosAprobados = cursosAprobados;
        this.rutasDeAprendizaje = rutasDeAprendizaje;

    }
}

const Jesus = new Estudiantes({
    nombre: "Jesus",
    email: "jesus@gmail.com",
    usuario: "Jexxus",
    linkedIn: "JesusCuadro",
    rutasDeAprendizaje: [DesarrolloWeb],
});

const Oscar = new Estudiantes({
    nombre: "Oscar",
    email: "oscar@gmail.com",
    usuario: "Ozz",
    twitter: "Ozz12",
    rutasDeAprendizaje: [EnglishAcademy, MarketingDigital],
});

console.log(Jesus);
console.log(Oscar);