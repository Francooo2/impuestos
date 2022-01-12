class Tax {
    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual
        this.deducciones     = deducciones
    }

    getMontoBrutoAnual() {
        return this.montoBrutoAnual
    }

    getDeducciones() {
        return this.deducciones
    }

    setMontoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual
    }

    setDeducciones(deducciones) {
        this.deducciones = deducciones
    }

    annualTax() {
        return ((this.montoBrutoAnual - this.deducciones) * 0.21)
    }
}

module.exports = {
    Tax
}