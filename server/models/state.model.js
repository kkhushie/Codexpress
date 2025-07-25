const mongoose = require('mongoose');

// Define the schema for the State model
const stateSchema = new mongoose.Schema({
  state_id: { type: String, required: true }, 
  name: { type: String, required: true },           // Name of the state
  created_at: { type: Date, default: Date.now },    // Automatically set the creation date
});

module.exports = mongoose.model('State', stateSchema); // Use 'state' as the model name
