/**
 * Created by haileykeen on 12/12/15.
 */
var fs = require('fs');
var file = process.argv[2];
var bufferedFile = fs.readFileSync(file);
var splitStrings = bufferedFile.toString().split('\n');
console.log(splitStrings.length - 1);