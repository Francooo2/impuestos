class Client {
    constructor(name, tax) {
        this.name = name
        this.tax  = tax
    }

    getName() {
        return this.name
    }

    getTax() {
        return this.tax
    }

    setName(name) {
        this.name = name
    }

    setTax(tax) {
        this.tax = tax
    }
}

module.exports = {
    Client
}