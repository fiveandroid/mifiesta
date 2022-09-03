const express = require("express");
const { findById } = require("../models/user.model");
const app = require("../server");
const { getAll, getById } = require("../usecases/customer.usecase");

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
    const customer = await findById(id);
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

module.exports = router;
