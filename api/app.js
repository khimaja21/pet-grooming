const express = require('express');
const bodyParser = require('body-parser');
const Customer = require('./models/customer');

const mongoose = require('mongoose');
const indexRoute = require('./routes/indexRoute');
const customerRoute = require('./routes/customerRoute');
//TODO: Uncomment
//mongodb+srv://it6203_hkailasw:eTVRCDaLA1BrLtbe@it6203-pet-grooming-srdsr.mongodb.net/it6203-pet-grooming?retryWrites=true', { useNewUrlParser: true }
mongoose.connect('mongodb://localhost:27017/customerSchema', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

const app= express()
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
  console.log('Recieved new request');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/customers', (req, res, next) => {
  Customer.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});


// parse application/json
app.use(bodyParser.json());

// add routes
app.use('/', indexRoute);
app.use('/customer', customerRoute);

// serve incoming post requests to /grooming
app.post('/customers', (req, res, next) => {
  console.log('adding new customerForm ');
  const customerData = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    weight: req.body.weight,
    appointmentDate: req.body.appointmentDate
  });
  customerData.save()


    .then(() => { console.log('Success'); })
    .catch(err => { console.log('Error:' + err); });
});

app.delete("/customers/:customerId", (req, res, next) => {
  var customerId= req.params.customerId;
  Customer.deleteOne({ _id:customerId }).then( function () { 
    console.log('customerId ${customerId} deleted succesfully.');
    res.status(204).send();
  });
});

//to use this middleware in other parts of the application
module.exports = app;
