const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mongoose = require("mongoose");
const Customer = require("./models/customer");

//TODO: Uncomment
//mongodb+srv://it6203_hkailasw:eTVRCDaLA1BrLtbe@it6203-pet-grooming-srdsr.mongodb.net/it6203-pet-grooming?retryWrites=true', { useNewUrlParser: true }

mongoose
  .connect("mongodb://localhost:27017/customerSchema", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error connecting");
  });

  app.use((req, res, next) => {
    console.log("Recieved new request");
    res.setHeader("Access-Control-Allow-Origin", "*"); //can connect from any host
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, OPTIONS, DELETE"
    ); //allowable methods
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/customers", (req, res, next) => {
  Customer.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error: ${err}");
      res.status(500).json(err);
    });
});

app.get("/customers/:id", (req, res, next) => {
  Customer.findById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// serve incoming post requests to /grooming
app.post("/customers", (req, res, next) => {
  console.log("adding new customerForm ");
  const customerData = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    weight: req.body.weight,
    appointmentDate: req.body.appointmentDate,
    preferredServices: req.body.preferredServices,
    additionalServices: req.body.additionalServices,
    allergens: req.body.allergens
  });
  customerData
    .save()
    .then(() => {
      console.log("Success");
      res.status(200).json();
    })
    .catch(err => {
      console.log("Error:" + err);
    });
});

app.put("/customers/:id", (req, res, next) => {
  console.log("id: " + req.params.id);
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Customer.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          weight: req.body.weight,
          appointmentDate: req.body.appointmentDate,
          preferredServices: req.body.preferredServices,
          additionalServices: req.body.additionalServices,
          allergens: req.body.allergens
        }
      },
      { new: true }
    )
      .then(customer => {
        if (customer) {
          console.log(customer);
          res.status(204).json();
        } else {
          console.log("no data exist for this id");
          res.status(404).json();
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json();
      });
  } else {
    console.log("please provide correct id");
  }
});

app.delete("/customers/:customerId", (req, res, next) => {
  var customerId = req.params.customerId;
  Customer.deleteOne({ _id: customerId }).then(function() {
    console.log("customerId ${customerId} deleted succesfully.");
    res.status(204).send();
  });
});

//to use this middleware in other parts of the application
module.exports = app;
