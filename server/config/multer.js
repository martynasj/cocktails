const multer = require('multer');
const uuid = require('uuid');

// Configure storage dir and file naming
const storage = multer.diskStorage({
  destination: "./static/images/cocktail",

  filename: function (req, file, cb) {
    const extension = file.mimetype.split('/')[1];
    const fileName = `${uuid.v1()}.${extension}`;
    cb(null, fileName)
  }
});

var upload = multer({ storage: storage });

module.exports = upload;