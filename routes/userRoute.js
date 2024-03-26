const express = require("express")
const router = express.Router()

const{getAllUsers} = require('../controllers/userController')
router.get('/',getAllUsers)

// router.get('/',(request, response) => {
//     response.status(200).send([{name:'ABC',age:20},{name:'ABC',age:20}])
// })


module.exports = router