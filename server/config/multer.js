const multer = require('multer');

// Configure storage dir and file naming
const storage = multer.diskStorage({
  destination: "./statics/images/cocktail",

  filename: function (req, file, cb) {
    const extension = ".jpg";
    const fileName = file.originalname + extension;
    console.log(fileName);
    cb(null, fileName)
  }
});

var upload = multer({ storage: storage });

module.exports = upload;