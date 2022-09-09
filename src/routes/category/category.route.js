const express = require("express")
const {create, getAll} = require("../../usecases/category/category.usecase")

const router = express.Router();


router.post("/", async (request, response) => {
    
    const categoryBody = request.body;
    try {
      const newCategory = create(categoryBody)
  
      response.json({
          success: true,
          message: 'Nueva categoria creada',
          data: {
            newCategory
          }
      })
  
  } catch (error) {
      response.status(400)
      response.json({
          success: false,
          message: error.message
      })
  
  }
})


router.get("/", async (request, response) => {
    
  
  try {
    const categories = await getAll()

    response.json({
        success: true,
        message: 'Nueva categoria creada',
        data: {
          categories
        }
    })

} catch (error) {
    response.status(400)
    response.json({
        success: false,
        message: error.message
    })

}
})
module.exports = router;