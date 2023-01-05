const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/db_nome",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = mongoose;