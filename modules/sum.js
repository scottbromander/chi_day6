var sum = 0;

function add(x,y){
  sum = x + y;
  console.log("SUM MODULE: " + sum);
  return sum;
}

module.exports = add;
