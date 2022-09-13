const express = require("express");
const cors = require("cors");
const routerUsers = require("./routes/auth/user.route");
const routerAuth = require("./routes/auth/auth.route");
const routeCustomer = require("./routes/auth/customer.route");
const routeProvider = require("./routes/auth/provider.route");
const routeCategory = require("./routes/category/category.route");
const routeMsg = require("./routes/msg/msg.route");
const routeRequest = require("./routes/request/request.route");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de ruta
app.use("/users", routerUsers);
app.use("/login", routerAuth);
app.use("/customer", routeCustomer);
app.use("/provider", routeProvider);
app.use("/category", routeCategory);
app.use("/msgs", routeMsg);
app.use("/request", routeRequest);

app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, Bienvenido a nuestra API de MiFiesta.info",
  });
});

module.exports = app;
