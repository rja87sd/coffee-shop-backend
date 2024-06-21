"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3002;
const cors = require("cors");
const baseRouter = require("./src/routes/baseRoutes");
const { error } = require("./src/middleware/error");
const mongooseConnect = require("./database");
const notFound = require("./src/middleware/notFound404");
const productRouter = require("./src/routes/productRoutes");

app.use(express.json());
app.use(cors());
app.use(baseRouter);
app.use("/product", productRouter);

app.use(notFound);
mongooseConnect().catch((err) => console.error(err));
app.use(error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
