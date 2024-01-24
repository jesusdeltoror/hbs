var express = require('express');
var router = express.Router();

/* Arreglo que simula la consulta de la base de datos */
let dato = []
let alumnos = [
  {
    id:456699,
    nombre:"Pepe",
    apellido_p:"Perez",
    apellido_m:"Lopez",
    estudios:{
      carrera:"Ing",
      nombre_c:"Sistemas"
    },
    edad:18,
    
  },
  {
    id:456699,
    nombre:"Juan",
    apellido_p:"De la o",
    apellido_m:"Gonzalez",
    estudios:{
      carrera:"Lic",
      nombre_c:"Diseño Grafico"
    },
    edad:23,
    
  },
  {
    id:456699,
    nombre:"Eva",
    apellido_p:"Rangel",
    apellido_m:"Martinez",
    estudios:{
      carrera:"Ing",
      nombre_c:"Mecatronica"
    },
    edad:19,
    
  },
]
let obj = {
  propiedad1:"Hola",
  propiedad2:"Mundo",
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Clase PEDRO', obj });
});

module.exports = router;
