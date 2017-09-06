var obj = new Object();

var array = [1, 5, 6];
var array2 = [];
var something = 'l';

var somet = 'n';

obj[something] = array;

array2 = obj[something];
// obj[somet] = 1;

obj[somet] = 9;



console.log(obj);

console.log(array2);