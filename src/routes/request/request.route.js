const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} = require("../../usecases/request/request.usecase");

router.get("/", async (request, response) => {
  try {
    const requests = await getAll();
    response.json({
      success: true,
      message: "Solicitudes",
      data: {
        requests,
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

router.post("/", async (request, response) => {
  const requestBody = request.body;
  try {
    const newRequest = await create(requestBody);

    response.json({
      success: true,
      message: "Nueva solicitud creada",
      data: {
        newRequest,
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
    const { id } = request.params
    try {
      const request = await getById(id);
      response.json({
        success: true,
        message: "Solicitud",
        data: {
            request,
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
    const { id } = request.params
    try {
      const request = await deleteById(id);
      response.json({
        success: true,
        message: "Solicitud elimindada",
        data: {
            request,
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

module.exports = router;
