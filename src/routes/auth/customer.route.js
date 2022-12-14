const express = require("express");
const { findById } = require("../../models/auth/user.model");
const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  findEmail,
} = require("../../usecases/auth/customer.usecase");
const createError = require("http-errors");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const customers = await getAll();
    response.json({
      success: true,
      data: {
        customers,
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
    const customer = await getById(id);
    response.json({
      success: true,
      data: {
        customer,
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
  const customerBody = request.body;

  try {
     const emailExist = await findEmail(request.body.email);
     let newCustomer = {};
    
     if (emailExist) {
       throw createError(409, "Este email ya está en uso. Elige otro");
     } else {             
       newCustomer = await create(customerBody);
     }

    response.json({
      success: true,
      message: "Nuevo cliente creado",
      data: {
        newCustomer
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
  const customerBody = request.body;
  try {
    const newCustomer = await updateById(id, customerBody);

    response.json({
      success: true,
      message: "Cliente actualizado",
      data: {
        newCustomer,
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
    const customerToDelete = await deleteById(id);

    response.json({
      success: true,
      message: "Cliente borrado",
      data: {
        customerToDelete,
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
