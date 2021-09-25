var router = require('express').Router()

var {
	crearWalk,
	obtenerWalk,
	modificarWalk,
	eliminarWalk
} = require('../controllers/walks');

router.get('/', obtenerWalk);
router.post('/', crearWalk);
router.put('/:id', modificarWalk);
router.delete('/:id', eliminarWalk);

module.exports = router;
