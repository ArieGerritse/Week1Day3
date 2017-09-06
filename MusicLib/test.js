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

var addTrackToPlaylist = function (trackId, playlistId) {

  library.playlists[playlistId].tracks.push(trackId);

};

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var addTrack = function (name, artist, album) {

  var newID = uid();

  library.tracks[newID] = {id: (newID),name: (name),artist: (artist),album: (album)};

};

var addPlaylist = function (name) {

  var newID = uid();

  library.playlists[newID] = {id: (newID),name: (name), tracks: []};

};

var idd = 't04';
var array = [1, 2, 3];
var input = 4;

// console.log(input in array);

var len = Object.keys(library.tracks).length;

var out = 'p01';
var outt = 't03';

// var check = function(rawr){

//   if(rawr){

//     console.log('yay');

//   }else{

//     console.log("both?");

//   }

// };

addPlaylist('jack');
printPlaylists();
// console.log(Object.keys(library.playlists[obj].tracks).length);

// printPlaylists();
// printTracks();

/*library.tracks[idd] = {id: idd, name: 'Musiccccc', artist: 'More Music', album: 'wind'};
console.log(library.tracks[idd]);
console.log(library.tracks);
console.log(library.tracks[idd].name);
*/
