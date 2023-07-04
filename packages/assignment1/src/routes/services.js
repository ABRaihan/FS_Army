const services = require("../controller/services");

const router = require("express").Router();

router.get("/number-range", services.getNumberRange)
router.post("/fake-profile", services.getFakeProfile)
router.post("/char-count", services.getCharacterCounts)

module.exports = router;