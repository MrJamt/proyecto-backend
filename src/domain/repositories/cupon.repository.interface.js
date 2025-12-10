class CuponRepository {
    constructor() {
        if (this.constructor === CuponRepository) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    async getAll() {
        throw new Error("Method 'getAll' must be implemented");
    }

    async getOne(id) {
        throw new Error("Method 'getOne' must be implemented");
    }

    async create(cupon) {
        throw new Error("Method 'create' must be implemented");
    }

    async update(id, cupon) {
        throw new Error("Method 'update' must be implemented");
    }

    async delete(id) {
        throw new Error("Method 'delete' must be implemented");
    }
}

module.exports = CuponRepository;