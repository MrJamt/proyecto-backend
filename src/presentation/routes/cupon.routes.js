const { Router } = require('express');
const asyncHandler = require('../utils/async.handler');
const CuponController = require('../controller/cupon.controller');
const CuponService = require('../../application/use-cases/cupon.service');
const CuponMongoRepository = require('../../infrastructure/repositories/database/mongo/cupon.mongo.repository');

const cuponRepository = new CuponMongoRepository();
const cuponService = new CuponService(cuponRepository);
const cuponController = new CuponController(cuponService);

const router = Router();
router.get('/', asyncHandler(cuponController.getAll));
router.get('/:id', asyncHandler(cuponController.getById));
router.post('/', asyncHandler(cuponController.create));
router.put('/:id', asyncHandler(cuponController.update));
router.delete('/:id', asyncHandler(cuponController.delete));

module.exports = router;