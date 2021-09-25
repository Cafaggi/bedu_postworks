const router = require('express').Router();
const {
	crearUser,
	obtenerUsers,
	modificarUser,
	eliminarUser,
	iniciarSesion
} = require('../controllers/users');
const auth = require('./auth')

router.get('/', auth.requerido, obtenerUsers);
router.get('/:id', auth.requerido, obtenerUsers);
router.post('/', crearUser);
router.post('/entrar', iniciarSesion)
router.put('/:id', auth.requerido, modificarUser);
router.delete('/:id', auth.requerido, eliminarUser);

module.exports = router;