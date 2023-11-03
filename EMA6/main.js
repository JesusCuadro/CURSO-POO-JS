function videoPlay(id) {
  const urlSecreta = "https://youtube.com/" + id;
  console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://youtube.com/" + id;
  console.log("Pausamos el video desde la url: " + urlSecreta);
}

class GlobalClases {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class comentario {
  constructor({ autor, fecha, contenido }) {
    this.autor = autor;
    this.fecha = fecha;
    this.contenido = contenido;
  }
}

const comentario1 = new comentario({
  autor: "Pepito",
  fecha: "2/11/2023",
  contenido: "Muy buena clase",
});

const comentario2 = new comentario({
  autor: "Juan",
  fecha: "24/12/2023",
  contenido: "Buena explicacion",
});

const comentario3 = new comentario({
  autor: "Diego",
  fecha: "6/1/2023",
  contenido: "Contento de esta aprendiendo esto",
});

class clase {
  constructor({ nombre, descripcion, comentarios = [] }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.comentarios = comentarios;
  }
}

const queEsVariable = new clase({
  nombre: "¿Que es una variable?",
  descripcion: "En esta clase aprenderas las bases de una variable",
  comentarios: [comentario1],
});

const queEsCiclo = new clase({
  nombre: "¿Que es un ciclo?",
  descripcion:
    "En esta clase aprenderas las bases de un ciclo y los tipos de ciclos que hay",
  comentarios: [comentario3],
});

const queEsFuncion = new clase({
  nombre: "¿Que es una funcion?",
  descripcion:
    "En esta clase aprenderas las bases de una funcion y como podemos aplicarla",
  comentarios: [comentario2],
});

class curso {
  constructor({ nombre, clases = [], areaAprendizaje, profesor, esGratis = false, lang = "español" }) {
    this._nombre = nombre;
    this.clases = clases;
    this.areaAprendizaje = areaAprendizaje;
    this.profesor = profesor;
    this.esGratis = esGratis;
    this.lang = lang;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre === "Curso malo de programacion") {
      console.error("Ese nombre para ese curso no es valido.");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgramacionBasica = new curso({
  nombre: "Curso de programacion basica",
  clases: [queEsVariable, queEsCiclo, queEsFuncion],
  areaAprendizaje: "Tecnologia",
  profesor: "Juan DC",
  esGratis: true,
  lang: "español"
});

const cursoBasicoDeJS = new curso({
  nombre: "Curso Basico de Javascript",
  clases: [queEsVariable, queEsCiclo, queEsFuncion],
  areaAprendizaje: "Tecnologia",
  profesor: "Diego De Granda",
  esGratis: false,
  lang: "español"
});

const cursoBasicoPHP = new curso({
  nombre: "Curso Basico de PHP",
  clases: [queEsVariable, queEsCiclo, queEsFuncion],
  areaAprendizaje: "Tecnologia",
  profesor: "Retax",
  esGratis: false,
  lang: "english"
});

class rutaDeAprendizaje {
  constructor({ nombre, cursos = [], areaAprendizaje, liderRuta }) {
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
  liderRuta: "Elon Musk",
});

const introduccionProgramacion = new rutaDeAprendizaje({
  nombre: "Introduccion a la programacion",
  cursos: [cursoProgramacionBasica],
  areaAprendizaje: "Programacion",
  liderRuta: "Jesus",
});

class Estudiante {
  constructor({
    nombre,
    email,
    usuario,
    twitter = undefined,
    linkedIn = undefined,
    cursosAprobados = [],
    rutasDeAprendizaje = [],
  }) {
    this.nombre = nombre;
    this.email = email;
    this.usuario = usuario;
    this.redesSociales = {
      twitter: twitter,
      linkedIn: linkedIn,
    };

    this.cursosAprobados = cursosAprobados;
    this.rutasDeAprendizaje = rutasDeAprendizaje;
  }
}

class EstudianteGratis extends Estudiante {
  
  constructor(props) {
    super(props);
  }

  cursoAprobado(cursoNuevo) {
    if (cursoNuevo.esGratis) {
      this.cursosAprobados.push(cursoNuevo);
    } else {
      console.warn(
        "Lo siento, " + this.nombre + ", solo puedes tomar cursos abiertos."
      );
    }
  }

}

class EstudianteBasic extends Estudiante {
  constructor(props) {
    super(props);
  }

  cursoAprobado(cursoNuevo) {
    if (cursoNuevo.lang !== "english") {
      this.cursosAprobados.push(cursoNuevo);
    } else {
      console.warn(
        "Lo siento, " + this.nombre + ", solo puedes tomar cursos en español."
      );
    }
  }

}

class EstudianteExpert extends Estudiante {
  
  constructor(props) {
    super(props);
  }

  cursoAprobado(cursoNuevo) {
    this.cursosAprobados.push(cursoNuevo);
  }

}

const Jesus = new EstudianteBasic({
  nombre: "Jesus",
  email: "jesus@gmail.com",
  usuario: "Jexxus",
  linkedIn: "JesusCuadro",
  cursosAprobados: [cursoBasicoDeJS],
  rutasDeAprendizaje: [DesarrolloWeb],
});

const Oscar = new EstudianteExpert({
  nombre: "Oscar",
  email: "oscar@gmail.com",
  usuario: "Ozz",
  twitter: "Ozz12",
  cursosAprobados: [cursoProgramacionBasica],
  rutasDeAprendizaje: [rutaPHP],
});

const Mateo = new EstudianteGratis({
  nombre: "Mateo",
  email: "mateo@gmail.com",
  usuario: "Mateow",
  twitter: "Mateow23",
  cursosAprobados: [cursoBasicoDeJS],
  rutasDeAprendizaje: [introduccionProgramacion],
});
