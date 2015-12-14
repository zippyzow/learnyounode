/**
 * Created by haileykeen on 12/12/15.
 */
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}

console.log(sum);
