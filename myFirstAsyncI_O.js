var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  if (err) {
    throw err;
  }
  var splitStrings = data.toString().split('\n');
  console.log(splitStrings.length - 1);
});

