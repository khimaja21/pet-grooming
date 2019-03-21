var express = require('express');
var router = express.Router();

//Customer Controller
var customerController = require('../controller/customerController');

//Routes
router.get('/', customerController.getAllCustomers);
//C: POST : Create a new Customer
router.post('/', customerController.createCustomer);

//D: DELETE : Delete existing Customer
//router.delete('/', customerController.deleteCustomer);

module.exports = router;
