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
class Comentario {
  constructor({ autor, fecha = undefined, contenido, rol = "estudiante", likes = 0 }) {
    this.autor = autor;
    this.fecha = fecha;
    this.contenido = contenido;
    this.rol = rol;
    this.likes = likes;
  }

  publicar() {
    console.log(
      this.autor + " (" + this.rol + ") " + "comento el dia " + this.fecha
    );
    console.log(this.likes + " likes");
    console.log(this.contenido);
  }
}

class clase {
  constructor({ nombre, descripcion }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

const queEsVariable = new clase({
  nombre: "¿Que es una variable?",
  descripcion: "En esta clase aprenderas las bases de una variable",
});

const queEsCiclo = new clase({
  nombre: "¿Que es un ciclo?",
  descripcion:
    "En esta clase aprenderas las bases de un ciclo y los tipos de ciclos que hay",
});

const queEsFuncion = new clase({
  nombre: "¿Que es una funcion?",
  descripcion:
    "En esta clase aprenderas las bases de una funcion y como podemos aplicarla",
});

class curso {
  constructor({
    nombre,
    clases = [],
    areaAprendizaje,
    profesor,
    esGratis = false,
    lang = "español",
  }) {
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
  lang: "español",
});

const cursoBasicoDeJS = new curso({
  nombre: "Curso Basico de Javascript",
  clases: [queEsVariable, queEsCiclo, queEsFuncion],
  areaAprendizaje: "Tecnologia",
  profesor: "Diego De Granda",
  esGratis: false,
  lang: "español",
});

const cursoBasicoPHP = new curso({
  nombre: "Curso Basico de PHP",
  clases: [queEsVariable, queEsCiclo, queEsFuncion],
  areaAprendizaje: "Tecnologia",
  profesor: "Retax",
  esGratis: false,
  lang: "english",
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
    facebook = undefined,
    cursosAprobados = [],
    rutasDeAprendizaje = [],
  }) {
    this.nombre = nombre;
    this.email = email;
    this.usuario = usuario;
    this.redesSociales = {
      twitter: twitter,
      linkedIn: linkedIn,
      facebook: facebook,
    };

    this.cursosAprobados = cursosAprobados;
    this.rutasDeAprendizaje = rutasDeAprendizaje;
  }

  publicarComentario(comentarioContenido) {
    const comentario = new Comentario({
      contenido: comentarioContenido,
      autor: this.nombre,
    });
    comentario.publicar();

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

class Profesor extends Estudiante {
  constructor(props) {
    super(props);
  }

  cursoAprobado(cursoNuevo) {
    this.cursosAprobados.push(cursoNuevo);
  }

  publicarComentario(comentarioContenido) {
    const comentario = new Comentario({
      contenido: comentarioContenido,
      autor: this.nombre,
      rol: "profesor",
    });
    comentario.publicar();
  }

}

const Jesus = new EstudianteBasic({
  nombre: "Jesus",
  email: "jesus@gmail.com",
  usuario: "Jexxus",
  linkedIn: "JesusCuadro",
  cursosAprobados: [cursoBasicoPHP],
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

const Freddy = new Profesor({
  nombre: "Freddy",
  email: "freddy@gmail.com",
  usuario: "freddy23",
  facebook: "Freddy Vega",
});