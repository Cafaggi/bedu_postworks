var router = require('express').Router()

var {
	createDog,
	getDog,
	modifyDog,
	deleteDog,
	activeFields,
	filterFields
} = require('../controllers/dogs');

router.get('/', getDog);
router.get('/filter', filterFields);
router.get('/fields', activeFields);
router.get('/:id', getDog);
router.post('/', createDog);
router.put('/:id', modifyDog);
router.delete('/:id', deleteDog);

module.exports = router;