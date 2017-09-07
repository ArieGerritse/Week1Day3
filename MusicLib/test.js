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

  var themFolllowFollowed = function(){

    for(var base of Object.keys(data)){

      var nameOf = data[base].name;
      var theyFollow = [];
      var FollowedBy = [];


      for(var others of Object.keys(data)){

        for(let followed of data[base].follows){

          if(followed == others){

            theyFollow.push(data[others].name);
          }
        }

        for(var compare of data[others].follows){

          if(base == compare){

            FollowedBy.push(data[others].name);
          }
          // console.log(FollowedBy);
        }
      }


      console.log(nameOf + ' follows: ' + theyFollow + '\nIs followed by: '+
       FollowedBy);
    }


  };

    var followsMost = function(){

    for(var people of Object.keys(data)){

      var most = ['',0];

      for(var total in data[people.follows]){
        console.log(most);

        if(total<most[2]){
          most=[data[people].name,total];
        }
      }
    }

    console.log(most)
  };

followsMost();