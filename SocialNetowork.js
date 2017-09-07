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
  },

  functions:{

  themFolllowFollowed: function(){

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
        }
      }


      console.log(nameOf + ' follows: ' + theyFollow + '\nIs followed by: '+
       FollowedBy);
    }


  },

  followsMost: function(){

    var most = ['',0];

    for(var people of Object.keys(data)){


      for(var total in data[people].follows){

        if(total>most[1]){
            most = [data[people].name,total];
        }
      }
    }

    console.log(most[0] + ' has the most followers with: ' + most[1]);

  },

  followedMost: function(age){

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

},

  followedMostOver30: function(){

    data.followsMost(30);
  },

  followsMostOver30: function(){

    var most = ['',0];

    for(var people of Object.keys(data)){


      for(var total in data[people].follows){

        if(total>most[1]){

          if(data[people].age > 30){
            most = [data[people].name,total];
          }
        }
      }
    }

    console.log(most[0] + ' has the most followers with: ' + most[1]);
  },

  followMeBackBro: function(){

    for(var followMe of Object.keys(data)){

      if(followMe == 'functions'){
        continue;
      }

      for(var followsThesePeople of data[followMe].follows){


          if(data[followsThesePeople].follows.includes(followMe) == false){

            console.log(data[followMe].name + '- "Hey! ' + data[followsThesePeople].name + 'follow me back bro!"');

          }
      }
    }

  },

  listEveryoneReach: function(){

    var reach = new Object ({});

    for(var base of Object.keys(data)){

      // reach[base].theyFollow2.push(2);

      if(base == 'functions'){
        continue;
      }

      reach[base] = {name:'',theyFollow2:[],totalReach:0};

      reach[base].name = data[base].name;

      var FollowedBy = [];


      for(var others of Object.keys(data)){

        if(others == 'functions'){
          continue;
        }

        for(let followed of data[base].follows){

          if(followed == others){

            reach[base].theyFollow2.push(others);

          }
        }

      }


      // console.log(nameOf + ' follows: ' + theyFollow + '\nIs followed by: '+
      //  FollowedBy);
    }

    for(var base of Object.keys(data)){

      if(base == 'functions'){
        continue;
      }

      reach[base].totalReach += reach[base].theyFollow2.length;

      for(var fol of reach[base].theyFollow2){

        for(var totalR of Object.keys(data)){

          // console.log(reach[fol].theyFollow);
            if(totalR == fol){
              reach[base].totalReach += reach[fol].theyFollow2.length;
            }

          }
        }

        console.log(reach[base].name + ' has a total reach of: ' + reach[base].totalReach);

      }

  }
},
};

data.functions.listEveryoneReach();