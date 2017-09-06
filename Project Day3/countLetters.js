function countLetters (arg){

  arg = arg.toLowerCase().split(" ").join("");
  var usedLetters = new Object();

  for(var out of arg){

    switch(true){
      case (!usedLetters[out] === false):
        usedLetters[out] += 1;
         break;
      case (!usedLetters[out] === true):
        usedLetters[out] = 1;
        break;
    }

  }

  console.log(usedLetters);

}

countLetters('lighthouse in the house');
