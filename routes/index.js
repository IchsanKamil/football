const router = require('express').Router();
const controller = require('../controller/controller.js');

router.post('/', controller.create);
router.get('/', controller.findAll);

module.exports = router;