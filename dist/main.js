"use strict";

var classTax = require('./tax');

var classClient = require('./client');

var Tax = classTax.Tax;
var Client = classClient.Client; // Se crean cinco impuestos distintos

var tax1 = new Tax(1200000, 120000);
var tax2 = new Tax(800000, 70000);
var tax3 = new Tax(900000, 80000);
var tax4 = new Tax(1300000, 100000);
var tax5 = new Tax(950000, 85000); // Se crean dos clientes distintos, a modo de ejemplo

var client1 = new Client('Javier', [tax1, tax2, tax3, tax4, tax5]);
var client2 = new Client('Francisca', [tax1, tax2, tax3, tax4, tax5]); // Se le calcula el impuesto 1 y 3 a Javier

console.log("El impuesto 1 de ".concat(client1.getName(), " es $ ").concat(client1.getTax()[0].annualTax()));
console.log("El impuesto 3 de ".concat(client1.getName(), " es $ ").concat(client1.getTax()[2].annualTax())); // Se le calcula el impuesto 4 y 5 a Francisca

console.log("El impuesto 4 de ".concat(client2.getName(), " es $ ").concat(client2.getTax()[3].annualTax()));
console.log("El impuesto 5 de ".concat(client2.getName(), " es $ ").concat(client2.getTax()[4].annualTax()));