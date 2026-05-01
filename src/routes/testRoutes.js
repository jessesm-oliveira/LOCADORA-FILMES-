const express = require ("express")

const router = express.Router()

const testcontroller = require ("../controllers/testController")

router.get("/", testcontroller.testconnection)


module.exports = router