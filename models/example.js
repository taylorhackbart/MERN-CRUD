const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ExampleSchema = new Schema({
  example: {
    type: String
  },
})
const Example = mongoose.model("Example", ExampleSchema)

module.exports = Example;