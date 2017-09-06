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
             }
};

var questionForUser = [1, 2, 3];

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (playNum) {

  if(playNum){

     console.log(playNum + ': ' + library.playlists[playNum].name + ' - ' +
      Object.keys(library.playlists[playNum].tracks).length + ' tracks');

  }else{


    for(var out of Object.keys(library.playlists)){

       console.log(out + ': ' + library.playlists[out].name + ' - ' +
        Object.keys(library.playlists[out].tracks).length + ' tracks');

    }
  }
};


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (trackNum) {

  if(trackNum){

    console.log(trackNum + ': ' + library.tracks[trackNum].name + ' by ' +
      library.tracks[trackNum].artist + " (" + library.tracks[trackNum].album + ")" );

  }else{

    for(var out of Object.keys(library.tracks)){

       console.log(out + ': ' + library.tracks[out].name + ' by ' +
        library.tracks[out].artist + " (" + library.tracks[out].album + ")" );
     }
  }

};


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  printPlaylists(playlistId);


  for(var song of library.playlists[playlistId].tracks){

    printTracks(song);

  }

};


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  library.playlists[playlistId].tracks.push(trackId);

};


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {

  var newID = uid();

  library.tracks[newID] = {id: (newID),name: (name),artist: (artist),album: (album)};

};


// adds a playlist to the library

var addPlaylist = function (name) {

  var newID = uid();

  library.playlists[newID] = {id: (newID),name: (name), tracks: []};

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {



};


var out = 'p02';
printPlaylist(out);

