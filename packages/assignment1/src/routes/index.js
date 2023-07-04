const router = require("express").Router();
const services = require("./services");

router.use("/api/services", services) /* @__All services route attach__@ */

module.exports = router;