const router = require("express").Router();
const buyRouter = require("./api/buy");

router.use("/buy", buyRouter);

module.exports = router;
