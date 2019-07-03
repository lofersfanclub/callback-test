
function returnData(f, callback){
  var added = 2 + callback(f)
  console.log('3');
  return added
}

function calculateData(u){
  console.log('2');
  var r = u * 5
  return r
}

var data = getData(4)

console.log(data);

function getData(myNumber){

    var x = 2
    console.log('Start');

    console.log('Step 1: x is now ' + x + ' and y does not exist');

    var y = returnData(myNumber, calculateData);

    console.log('1: x is ' + x + 'and y is now done and returns: ' + y);

    console.log('4');

    return x + y
};
