const router = require('express').Router();
const {
	createUser,
	getUsers,
	modifyUser,
	deleteUser,
	logIn
} = require('../controllers/users');
const auth = require('./auth')

router.get('/', auth.requerido, getUsers);
router.get('/:id', auth.requerido, getUsers);
router.post('/', createUser);
router.post('/entrar', logIn)
router.put('/:id', auth.requerido, modifyUser);
router.delete('/:id', auth.requerido, deleteUser);

module.exports = router;