class Estudiante{
    constructor(nombre, edad, cursosAprobados){
        this.nombre = nombre;
        this.edad = edad;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }


}

const Ana = new Estudiante("Ana", 32, ["Curso de marketing", "Curso de administracion en startups"]);

Ana.aprobarCurso("Curso de ventas");

console.log(Ana);