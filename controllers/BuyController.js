const { buym } = require("../database/db");

const getAllBuys = async (req, res) => {
  try {
    const buys = await buym.findAll();
    res.json(buys);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getBuy = async (req, res) => {
  try {
    const buy = await buym.findAll({
      where: { id: req.params.id },
    });
    res.json(buy[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createBuy = async (req, res) => {
  try {
    await buym.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateBuy = async (req, res) => {
  try {
    await buym.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteBuy = async (req, res) => {
  try {
    await buym.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getAllBuys,
  getBuy,
  createBuy,
  updateBuy,
  deleteBuy,
};
