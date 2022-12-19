const { Router } = require('express');

const adminController = Router();
const { AdminModel } = require('../Models/Admin.model');

adminController.post('/new', async (req, res) => {
  try {
    const newAdmin = await AdminModel.create(req.body);
    return res
      .status(200)
      .send({ message: 'admin added successfully', newAdmin });
  } catch (err) {
    return res.status(500).send('Internal Server error');
  }
});

module.exports = { adminController };
