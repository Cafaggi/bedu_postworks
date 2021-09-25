var router = require('express').Router()

var {
	crearDog,
	obtenerDog,
	modificarDog,
	eliminarDog,
	count
} = require('../controllers/dogs');

router.get('/', obtenerDog);
router.get('/count/:cat', count);
router.get('/:id', obtenerDog);
router.post('/', crearDog);
router.put('/:id', modificarDog);
router.delete('/:id', eliminarDog);

module.exports = router;

localhost:4001//v1/dogs/count/Gato
localhost:4001//v1/dogs/id=1244123531
