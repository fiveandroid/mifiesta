const express = require("express")
const { login } = require("../usecases/user.usecase")

const router = express.Router()


router.post("/", async(request, response) => {

  console.log("Lllego")
  
  const { email, password } = request.body
  try {
    const token = await login(email, password)
    response.json({
      success: true,
      data: token
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  } 

})

module.exports = router 