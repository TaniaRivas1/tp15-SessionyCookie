const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre es requerido"),
  check("color")
    .notEmpty()
    .withMessage("Debe seleccionar un color"),
  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("El email es inválido"),
];

