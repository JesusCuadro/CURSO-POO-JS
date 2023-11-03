class comentario{
    constructor({
        autor,
        fecha,
        contenido,
    }){
        this.autor = autor;
        this.fecha = fecha;
        this.contenido = contenido;
    }
}

const comentario1 = new comentario({
    autor: "Pepito",
    fecha: "2/11/2023",
    contenido: "Muy buena clase"
})

const comentario2 = new comentario({
    autor: "Juan",
    fecha: "24/12/2023",
    contenido: "Buena explicacion"
})

const comentario3 = new comentario({
    autor: "Diego",
    fecha: "6/1/2023",
    contenido: "Contento de esta aprendiendo esto"
})

class clase{
    constructor({
        nombre,
        descripcion,
        comentarios = [],
    }){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.comentarios = comentarios;
    }
}

const queEsVariable = new clase ({
    nombre: "¿Que es una variable?",
    descripcion: "En esta clase aprenderas las bases de una variable",
    comentarios: [comentario1]
})

const queEsCiclo = new clase ({
    nombre: "¿Que es un ciclo?",
    descripcion: "En esta clase aprenderas las bases de un ciclo y los tipos de ciclos que hay",
    comentarios: [comentario3]
})

const queEsFuncion = new clase ({
    nombre: "¿Que es una funcion?",
    descripcion: "En esta clase aprenderas las bases de una funcion y como podemos aplicarla",
    comentarios: [comentario2]
})

class curso{
    constructor({
        nombre,
        clases = [],
        areaAprendizaje,
        profesor,
    }){
        this.nombre = nombre;
        this.clases = clases;
        this.areaAprendizaje = areaAprendizaje;
        this.profesor = profesor;
    }
}

const cursoProgramacionBasica = new curso({
    nombre: "Curso Gratis de Programacion Basica",
    clases: [queEsVariable, queEsCiclo, queEsFuncion],
    areaAprendizaje: "Tecnologia",
    profesor: "Juan DC"
})

const cursoBasicoDeJS = new curso({
    nombre: "Curso Basico de Javascript",
    clases: [queEsVariable, queEsCiclo, queEsFuncion],
    areaAprendizaje: "Tecnologia",
    profesor: "Diego De Granda"
})

const cursoBasicoPHP = new curso({
    nombre: "Curso Basico de PHP",
    clases: [queEsVariable, queEsCiclo, queEsFuncion],
    areaAprendizaje: "Tecnologia",
    profesor: "Retax"
})

class rutaDeAprendizaje{
    constructor({
        nombre,
        cursos = [],
        areaAprendizaje,
        liderRuta,
    }){
        this.nombre = nombre;
        this.cursos = cursos;
        this.areaAprendizaje = areaAprendizaje;
        this.liderRuta = liderRuta;
    }
}

const DesarrolloWeb = new rutaDeAprendizaje({

    nombre: "DesarrolloWeb",
    cursos: [cursoBasicoDeJS, cursoProgramacionBasica],
    areaAprendizaje: "Programacion",
    liderRuta: "JuanDC",

});

const rutaPHP = new rutaDeAprendizaje({

    nombre: "Ruta PHP desde 0",
    cursos: [cursoBasicoPHP, cursoProgramacionBasica], 
    areaAprendizaje: "Programacion",
    liderRuta:  "Elon Musk",

});

const introduccionProgramacion = new rutaDeAprendizaje({

    nombre: "Introduccion a la programacion",
    cursos: [cursoProgramacionBasica],
    areaAprendizaje: "Programacion",
    liderRuta: "Jesus",

});

class Estudiante{
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

const Jesus = new Estudiante({
    nombre: "Jesus",
    email: "jesus@gmail.com",
    usuario: "Jexxus",
    linkedIn: "JesusCuadro",
    cursosAprobados: [cursoBasicoDeJS],
    rutasDeAprendizaje: [DesarrolloWeb],
});

const Oscar = new Estudiante({
    nombre: "Oscar",
    email: "oscar@gmail.com",
    usuario: "Ozz",
    twitter: "Ozz12",
    rutasDeAprendizaje: [EnglishAcademy, MarketingDigital],
});

console.log(Jesus);
console.log(Oscar);