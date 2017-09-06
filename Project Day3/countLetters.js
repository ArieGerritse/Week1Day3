function countLetters (arg){

  arg = arg.toLowerCase().split(" ").join("");
  var usedLetters = new Object({});

  for(var out of arg){

    switch(true){
      case ((out in usedLetters) === true):
        usedLetters[out] += 1;
         break;
      case ((out in usedLetters) === false):
        usedLetters[out] = 1;
        break;
    }

  }

  console.log(usedLetters);

}

countLetters('lighthouse in the house');