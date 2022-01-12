"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Tax = /*#__PURE__*/function () {
  function Tax(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Tax);

    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Tax, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return this.montoBrutoAnual;
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return this.deducciones;
    }
  }, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(montoBrutoAnual) {
      this.montoBrutoAnual = montoBrutoAnual;
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(deducciones) {
      this.deducciones = deducciones;
    }
  }, {
    key: "annualTax",
    value: function annualTax() {
      return (this.montoBrutoAnual - this.deducciones) * 0.21;
    }
  }]);

  return Tax;
}();

module.exports = {
  Tax: Tax
};