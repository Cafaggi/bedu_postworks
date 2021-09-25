var router = require('express').Router()

var {
	createWalk,
	getWalk,
	modifyWalk,
	deleteWalk
} = require('../controllers/walks');

router.get('/', getWalk);
router.post('/', createWalk);
router.put('/:id', modifyWalk);
router.delete('/:id', deleteWalk);

module.exports = router;
