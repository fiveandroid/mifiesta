const express = require("express")
const { getAll, getById, create } = require("../usecases/user.usecase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router();

// router.use(auth)


// Lista los usuarios
router.get("/", async (request, response) => {
    console.log("Llego")
  try {
    const users =  await getAll();
    response.json({
      success: true,
      data: {
        users
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }


})


router.get("/detail", auth, async (request, response) => {
    const { id } = request.body
    try {
      const user =  await getById(id);

      console.log(user)

      response.json({
        success: true,
        data: {
          user
        }
      })
    }catch(error) {
      response.status(error.status || 500)
      response.json({
        success: false,
        message: error.message
      })
    }
  })

/*
router.get("/:id", async (request, response) => {
  const { id } = request.params
  try {
    const user =  await getById(id);
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})
*/

//Crea un usuario
router.post("/", async (request, response) => {

  console.log("entro user")

  try {
    const user =  await create(request.body);
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
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