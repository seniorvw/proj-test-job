const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
 category: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;
