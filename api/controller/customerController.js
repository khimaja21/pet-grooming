var Customer = require('../models/customer');

//Create customer
exports.createCustomer = function (req, res) {

  var customerReq = req.body;
  var data = {};
  var newCustomer = new Customer({
    firstName: customerReq.firstName,
    lastName: customerReq.lastName,
    email: customerReq.email,
    phone: customerReq.phone,
    weight: customerReq.weight,
    appointmentDate: customerReq.appointmentDate
    // ,
    // preferredServices: customerReq.preferredServices,
    // additionalServices: customerReq.additionalServices,
    // allergens: customer.allergens
  });

  newCustomer.save()
    .then(() => {
      data = {
        'status': 'success',
        'message': 'Customer services Form created successfully'
      };
      res.status(200).json(data);
    })
    .catch(err => { console.log('Error: ' + err); })
};

exports.getAllCustomers = function(req,res){

};
