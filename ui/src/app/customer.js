const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema
const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  weight: { type: Number, required: true },
  appointmentDate: { type: Date, required: true },
  preferredServices: { type: String, required: true },
  additionalServices: { type: [String], required: true },
  allergens: { type: [String], required: true }
});

// Parameters: (model_name, schema_to_use, collection_name)
module.exports = mongoose.model('Customer', customerSchema, 'Customers');
