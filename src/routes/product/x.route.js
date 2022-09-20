const express = require("express");
const {
  create,
  getAll,
  deleteById,
  updateById,
  getById
} = require("../../usecases/product/Product.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  const productBody = request.body;
  try {
    const newProduct = await create(productBody);

    response.json({
      success: true,
      message: "Nuevo producto creado",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    const products = await getAll();

    response.json({
      success: true,
      message: "Productos",
      data: {
        products,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const productToDelete = await deleteById(id);

    response.json({
      success: true,
      message: "Producto borrado",
      data: {
        productToDelete,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  const { id } = request.params;
  const ProductBody = request.body;
  try {
    const newProduct = await updateById(id, ProductBody);

    response.json({
      success: true,
      message: "Producto actualizado",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const product = await getById(id);
    response.json({
      success: true,
      data: {
        product,
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
module.exports = router;jvreyesa@DESKTOP-2DI1JC2:~/mifiesta/src/routes/product$










