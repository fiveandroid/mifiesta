
const express = require("express")
const sendMail = require("./../../usecases/msg/msg.usecases")

const router = express.Router()


router.post("/",  async ( request, response ) =>{
    console.log("Llego SendEmail")

    await sendMail( request.body )
    response.status(201)
    response.json({
      success: true     
    })
})

module.exports = router