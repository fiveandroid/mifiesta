const express = require("express");
const {
  create,
  getAll,
  deleteById,
  updateById,
  getById
} = require("../../usecases/category/category.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  const categoryBody = request.body;
  try {
    const newCategory = await create(categoryBody);

    response.json({
      success: true,
      message: "Nueva categoria creada",
      data: {
        newCategory,
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
    const categories = await getAll();

    response.json({
      success: true,
      message: "Categorias",
      data: {
        categories,
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
    const categoryToDelete = await deleteById(id);

    response.json({
      success: true,
      message: "Categoria borrada",
      data: {
        categoryToDelete,
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
  const categoryBody = request.body;
  try {
    const newCategory = await updateById(id, categoryBody);

    response.json({
      success: true,
      message: "Categoria actualizada",
      data: {
        newCategory,
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
    const category = await getById(id);
    response.json({
      success: true,
      data: {
        category,
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
module.exports = router;
