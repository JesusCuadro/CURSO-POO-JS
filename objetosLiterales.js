const jesus = {
    nombre: "Jesus",
    edad: 20,
    cursosAprobados: [
      "Terminal y Linea de Comandos",
      "Basico de JS",
      "Curso de GIT y GitHub",
    ],
    aprobarCurso(nuevoCurso) {
      this.cursosAprobados.push(nuevoCurso);
    },
  };
  
  // Hacer que apruebe un curso
  
  jesus.cursosAprobados.push("Basico de PHP");
  jesus.nombre = "Daniel";
  jesus.edad += 10;
  jesus.aprobarCurso("Curso de Kotlin");