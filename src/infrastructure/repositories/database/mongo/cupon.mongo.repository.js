const CuponRepository = require("../../../../domain/repositories/cupon.repository.interface");
const CuponModel = require("./models/cupon.model");
const Cupon = require("../../../../domain/entities/cupon.entity");

class CuponMongoRepository extends CuponRepository {
  async getAll() {
    const cupons = await CuponModel.find();
    return cupons.map(
      (cupon) =>
        new Cupon(
          cupon._id.toString(),
          cupon.code,
          cupon.discount,
          cupon.fromDate,
          cupon.toDate
        )
    );
  }

  async getOne(id) {
    const cupon = await CuponModel.findById(id);
    if (!cupon) return null;
    return new Cupon(
      cupon._id.toString(),
      cupon.code,
      cupon.discount,
      cupon.fromDate,
      cupon.toDate
    );
  }

  async create(cuponEntity) {
    const newCupon = new CuponModel({
      code: cuponEntity.code,
      discount: cuponEntity.discount,
      fromDate: cuponEntity.fromDate,
      toDate: cuponEntity.toDate,
    });
    const savedCupon = await newCupon.save();
    return new Cupon(
      savedCupon._id.toString(),
      savedCupon.code,
      savedCupon.discount,
      savedCupon.fromDate,
      savedCupon.toDate
    );
  }

  async update(id, cuponEntity) {
    const updatedCupon = await CuponModel.findByIdAndUpdate(
      id,
      {
        code: cuponEntity.code,
        discount: cuponEntity.discount,
        fromDate: cuponEntity.fromDate,
        toDate: cuponEntity.toDate,
      },
      { new: true }
    );

    if (!updatedCupon) return null;
    return new Cupon(
      updatedCupon._id.toString(),
      updatedCupon.code,
      updatedCupon.discount,
      updatedCupon.fromDate,
      updatedCupon.toDate
    );
  }

  async delete(id) {
    await CuponModel.findByIdAndDelete(id);
  }
}

module.exports = CuponMongoRepository;
