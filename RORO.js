class Estudiante{
    constructor({  
        twitter,
        edad,
        cursosAprobados = [],
        email,
        facebook,
        instagram,
        nombre,
    }){
        this.nombre = nombre;
        this.facebook = facebook;
        this.instagram = instagram;
        this.email = email;
        this.twitter = twitter;
        this.edad = edad;
        this.cursosAprobados = cursosAprobados;
    }
}

const Ana = new Estudiante({

    email: "anagg@gmail.com",
    nombre: "Ana", 
    edad: 32,
    facebook: "Ana Rey",

});

console.log(Ana);