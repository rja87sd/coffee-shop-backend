"use strict";

const Product = require("../models/Product");

async function newProduct(req, res, next) {
  try {
    const { name, description, price, category, stock, imageUrl } = req.body;
    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });
    await product.save();
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

