const express = require("express")
const router = express.Router()
const {addP,getP, deleteP} = require("../Controller/Product")

router.post('/addP',addP)
router.get('/getP',getP)



module.exports = router