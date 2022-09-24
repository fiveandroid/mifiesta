const express = require("express");
const {
  create,
  getAll,
  deleteById,
  updateById,
  getById
} = require("../../usecases/offer/offer.usecase");

const router = express.Router();

router.post("/", async (request, response) => {
  const offerBody = request.body;
  try {
    const newOffer = await create(offerBody);

    response.json({
      success: true,
      message: "Nueva oferta creada",
      data: {
        newOffer,
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
    const offers = await getAll();

    response.json({
      success: true,
      message: "Ofertas",
      data: {
        offers,
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
    const offerToDelete = await deleteById(id);

    response.json({
      success: true,
      message: "ProdOferta borrada",
      data: {
        offerToDelete,
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
  const offerBody = request.body;
  try {
    const offerUpdated = await updateById(id, offerBody);

    response.json({
      success: true,
      message: "Oferta actualizada",
      data: {
        offerUpdated,
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
    const offer = await getById(id);
    response.json({
      success: true,
      data: {
        offer,
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