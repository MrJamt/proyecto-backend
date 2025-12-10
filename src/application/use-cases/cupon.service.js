const Cupon = require("../domain/entities/cupon.entity");
const NotFoundError = require("../../domain/errors");
const { NotFoundError } = require('../../domain/errors');

class CuponService {
    constructor(cuponRepository) {
        this.cuponRepository = cuponRepository;
    }

    async getAllCupons() {
        return this.cuponRepository.getAll();
    }

    async getCuponById(id) {
        const cupon = await this.cuponRepository.getOne(id);
        if (!cupon) {
            throw new NotFoundError(`Cupon with id ${id} not found`);
        }
        return cupon;
    }

    async createCupon(cuponData) {
        const cuponEntity = new Cupon(
            null,
            cuponData.code,
            cuponData.discount,
            cuponData.fromDate,
            cuponData.toDate
        );
        return this.cuponRepository.create(cuponEntity);
    }

    async updateCupon(id, cuponData) {
        const existingCupon = await this.cuponRepository.getOne(id);
        if (!existingCupon) {
            throw new NotFoundError(`Cupon with id ${id} not found`);
        }

        const cuponEntity = new Cupon(
            id,
            cuponData.code,
            cuponData.discount,
            cuponData.fromDate,
            cuponData.toDate
        );
        return this.cuponRepository.update(id, cuponEntity);
    }

    async deleteCupon(id) {
        const cupon = await this.cuponRepository.getOne(id);
        if (!cupon) {
            throw new NotFoundError(`Cupon with id ${id} not found`);
        }
        return this.cuponRepository.delete(id);
    }
}

module.exports = CuponService;