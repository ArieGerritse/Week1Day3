var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },



  printPlaylists: function (playNum) {

    if(playNum){

       console.log(playNum + ': ' + this.playlists[playNum].name + ' - ' +
        Object.keys(this.playlists[playNum].tracks).length + ' tracks');

    }else{


      for(var out of Object.keys(this.playlists)){

         console.log(out + ': ' + this.playlists[out].name + ' - ' +
          Object.keys(this.playlists[out].tracks).length + ' tracks');

      }
    }
  },


printTracks: function (trackNum) {

  if(trackNum){

    console.log(trackNum + ': ' + this.tracks[trackNum].name + ' by ' +
      this.tracks[trackNum].artist + " (" + this.tracks[trackNum].album + ")" );

  }else{

    for(var out of Object.keys(this.tracks)){

       console.log(out + ': ' + this.tracks[out].name + ' by ' +
        this.tracks[out].artist + " (" + this.tracks[out].album + ")" );
     }
  }

},


printPlaylist: function (playlistId) {

  this.printPlaylists(playlistId);


  for(var song of this.playlists[playlistId].tracks){

    this.printTracks(song);

  }

},



addTrackToPlaylist: function (trackId, playlistId) {

  this.playlists[playlistId].tracks.push(trackId);

},


uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


addTrack: function (name, artist, album) {

  var newID = this.uid();

  this.tracks[newID] = {id: (newID),name: (name),artist: (artist),album: (album)};

},


addPlaylist: function (name) {

  var newID = this.uid();

  this.playlists[newID] = {id: (newID),name: (name), tracks: []};

},

printSearchResults: function(query) {

    for(let trackID of Object.keys(this.tracks)){
      var p;
      var itHappened = 0;
      var repeates;

      for(var trackInfo of Object.keys(this.tracks[trackID])){

        p = this.tracks[trackID][trackInfo].search(new RegExp(query, "i"));

      if(p > -1){

        if(trackID !== repeates){
          console.log(this.tracks[trackID]);
          itHappened++;
          repeates = trackID;
        }

      }

      }

    }

    if(itHappened === 0){

      console.log('Sorry that never came up in the database.');
    }

  },


};
