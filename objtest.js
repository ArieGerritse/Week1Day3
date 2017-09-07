var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};



  var followedMost =  function(age){

    var folMost = {};
    var current;
    var i = 0;
    var ties = 0, total = 0;


    for(var people of Object.keys(data)){

      if(people in folMost === false){

        if(age){

          if(data[people].age > age){

            folMost[people] = {name:data[people].name,FollowedByThesePeople: 0};

          }

        }else{

          folMost[people] = {name:data[people].name,FollowedByThesePeople: 0};

        }

      }

    }

    for(var people2 of Object.keys(data)){

      for(var temp of Object.keys(folMost)){

        if(data[people2].follows.includes(temp)){

          folMost[temp].FollowedByThesePeople++;

        }

      }
    }

    for(var endthis of Object.keys(folMost)){

      if(folMost[endthis].FollowedByThesePeople > total){

        ties=0;
        total = folMost[endthis].FollowedByThesePeople;

      }
      if(folMost[endthis].FollowedByThesePeople === total){
        ties++;
      }
    }

    if(ties > 0){

      console.log('There was a tie for most followed by with: ' + total + ' follows');

      for(var peopleTied of Object.keys(folMost)){

        if(total === folMost[peopleTied].FollowedByThesePeople){

          console.log(folMost[peopleTied].name + '!');

        }
      }
    }else{

      for(var peopleTied of Object.keys(folMost)){

        if(total === folMost[peopleTied].FollowedByThesePeople){

          console.log(folMost[peopleTied].name + ' had the most followers with: ' + total);

        }
      }


    }

};


  followedMost(30);

