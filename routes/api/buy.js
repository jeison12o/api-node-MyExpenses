const router = require("express").Router();
const {
  getAllBuys,
  getBuy,
  createBuy,
  updateBuy,
  deleteBuy,
} = require("../../controllers/BuyController");

router.get("/", getAllBuys);
router.get("/:id", getBuy);
router.post("/", createBuy);
router.put("/:id", updateBuy);
router.delete("/:id", deleteBuy);

module.exports = router;
