const mongoose = require("../database");
const Schema = mongoose.Schema,

uniqueValidator = require('mongoose-unique-validator'),
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({

  username: {type: String, lowercase: true, required: [true, "can't be blank"], 
                             match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
 
  email: {type: String, lowercase: true, required: [true, "can't be blank"], 
                              match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: { type: String, required: true, select:false },
  bio: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps:true});//The {timestamps: true} option creates a createdAt 
                     // and updatedAt field on our models that contain timestamps
                     // which will get automatically updated when our model changes.


UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.pre("save", async function(next) {
  
  const hash = await bcrypt.hashSync(this.password, 10);// 10 indica a quantidade de veses que o hash sera gerado
  this.password = hash;
  next();
});


 
module.exports = mongoose.model("User", UserSchema);