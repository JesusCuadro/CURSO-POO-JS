function Estudiante(nombre, edad, cursosAprobados) {
  this.nombre = nombre;
  this.edad = edad;
  this.cursosAprobados = cursosAprobados;
  /*  this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    } */
}

Estudiante.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const Alex = new Estudiante("Alexander Juarez", 13, ["Curso de desarrollo movil", "Curso de como lavarse las manos"]);

Alex.aprobarCurso("Logica de programacion");

console.log(Alex);
