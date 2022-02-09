const { login, dashboard } = require("../controllers/main")
const router = require("express").Router()
const { authenticationMiddleware } = require("../middleware/auth")


router.post("/login", login)
router.get("/dashboard", authenticationMiddleware, dashboard)

module.exports = router
