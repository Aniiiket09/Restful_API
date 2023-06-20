const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const personSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt password
//Here we will use bcrypt library to to save paswword in crypted manner in database
personSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
personSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, "secret", {
    expiresIn: "120m",
  });
};

//we are bcrypt library another function of checking the password enterd with the password in database
personSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
