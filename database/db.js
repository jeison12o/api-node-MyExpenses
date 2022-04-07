const { Sequelize, DataTypes } = require("sequelize");
const BuyModel = require("../models/BuyModel");

const db = new Sequelize("fullmyexpenses", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  db.authenticate();
  console.log("conexion exitosa a la base de datos");
} catch (error) {
  console.log(error);
}

const buym = BuyModel(db, DataTypes);

buym.sync({ force: false }).then(() => {
  console.log("tablas syncronizadas");
});

module.exports = {
  db,
  buym,
};
