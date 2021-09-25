var router = require('express').Router();

router.get('/', (req, res) => {
	res.send('welcome to my api');
})

router.use('/usuarios', require('./usuarios'));
router.use('/dogs', require('./dogs'));
router.use('/walks', require('./walks'));

module.exports = router;