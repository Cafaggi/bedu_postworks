var router = require('express').Router();

router.get('/', (req, res) => {
	res.send('welcome to Walk-my-dog api');
})

router.use('/users', require('./users'));
router.use('/dogs', require('./dogs'));
router.use('/walks', require('./walks'));

module.exports = router;