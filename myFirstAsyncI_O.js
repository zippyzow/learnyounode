var fs = require('fs');
var file = process.argv[2];

var readFileCallback = function(err, data) {
  if (err) {
    console.error(err);
  } else {
    var splitStrings = data.toString().split('\n');
    console.log(splitStrings.length - 1);
  }
};

fs.readFile(file, readFileCallback);

