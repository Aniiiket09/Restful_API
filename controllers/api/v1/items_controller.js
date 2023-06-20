const { title } = require("process");
const Item = require("../../../models/item");

module.exports.create_item = async function (req, res) {
  console.log("Inside item controller");

  const person = req.person.username;
  // console.log("ID:" + person);

  try {
    console.log("Inside try");

    const items = await Item.create({
      person: person,
      id: req.params.id,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    // Error handling
    return res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};
