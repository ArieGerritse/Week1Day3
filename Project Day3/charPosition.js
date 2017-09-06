function countLetters (arg){

  arg = arg.toLowerCase();
  var charPosition = new Object();
  var position = 0;

  for(var out of arg){

    position++;

    switch(true){
      case(out === ' '):
        break;
      case (!charPosition[out] === false):
        charPosition[out].push(position);
        break;
      case (!charPosition[out] === true):
        charPosition[out] = [position];
        break;
    }

  }

  console.log(charPosition);

}

countLetters('lighthouse in the house');
