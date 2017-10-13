const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

function addUid(event) {
  event.data.adminRef.update({uid: event.auth.variable.uid});
}

function addToSongList(event) {
  const songList = admin.database().ref('/songList');
  const song = {};
  song[event.params.id] = event.data.val().title;
  return songList.update(song).then(() => event.data.val());
}

exports.saveSong = functions.database.ref('/songs/{id}')
  .onWrite(event => {
    if (event.auth.admin) return;
    addUid(event);
    return addToSongList(event);
  });
