const user = require("../middleware/user");

const multipleUpload = async (req, res) => {
  try {
    await user.userCreate();
    console.log(req.data);
    


    return res.send(`User created successfully. `);
  } catch (error) {
    console.log(error.code);

    // if (error.code === "LIMIT_UNEXPECTED_FILE") {
    //   return res.send("Too many files to upload.");
    // }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

module.exports = {
  multipleUpload: multipleUpload
};