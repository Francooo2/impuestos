"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Client = /*#__PURE__*/function () {
  function Client(name, tax) {
    _classCallCheck(this, Client);

    this.name = name;
    this.tax = tax;
  }

  _createClass(Client, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getTax",
    value: function getTax() {
      return this.tax;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setTax",
    value: function setTax(tax) {
      this.tax = tax;
    }
  }]);

  return Client;
}();

module.exports = {
  Client: Client
};