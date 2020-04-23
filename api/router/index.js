var router=require("express").Router()
var user=require('../controller/user') 


router.post('/register',user.register)
router.post('/populate',user.populate)

module.exports=router;
