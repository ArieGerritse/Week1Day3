function charicterPosition (arg){

  arg = arg.toLowerCase();
  var charPosition = new Object({});
  var position = 0;

  for(var out of arg){

    position++;

    switch(true){
      case(out === ' '):
        break;
      case ((out in charPosition) === true):
        charPosition[out].push(position);
        break;
      case ((out in charPosition) === false):
        charPosition[out] = [position];
        break;
    }

  }

  console.log(charPosition);

}

charicterPosition('lighthouse in the house');
