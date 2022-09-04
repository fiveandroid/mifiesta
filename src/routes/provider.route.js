const express = require("express");
const { getAll, getById, create, updateById, deleteById } = require("../usecases/provider.usecase");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const providers = await getAll();
    response.json({
      success: true,
      data: {
        providers,
      },
    });
  } catch (err) {
    response.status(400);
    response.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const provider = await getById(id);
    response.json({
      success: true,
      data: {
        provider,
      },
    });
  } catch (err) {
    response.status(400);
    response.json({
      success: false,
      message: err.message,
    });
  }
});

router.post("/", async (request, response) => {
  const providerBody = request.body;
  try {
    const newProvider = await create(providerBody)

    response.json({
        success: true,
        message: 'Nuevo proveedor creado',
        data: {
            newProvider
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

router.patch("/:id", async (request, response) => {
  const { id } = request.params
  const providerBody = request.body;
  try {
    const newProvider = await updateById(id,providerBody)

    response.json({
        success: true,
        message: 'Proveedor actualizado',
        data: {
            newProvider
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


router.delete("/:id", async(request, response) => {
  const { id } = request.params
  try {
    const providerToDelete = await deleteById(id)

    response.json({
        success: true,
        message: 'Proveedor borrado',
        data: {
          providerToDelete
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
