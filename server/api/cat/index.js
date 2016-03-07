'use strict';

var express = require('express');
var controller = require('./cat.controller');

var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.deleteCat);
router.put('/:id', controller.update);

module.exports = router;
