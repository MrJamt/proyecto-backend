class Cupon {
    constructor(id, code, discount, fromDate, toDate) {
        this.id = id;
        this.code = code;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.discount = discount;
    }
}

module.exports = Cupon;