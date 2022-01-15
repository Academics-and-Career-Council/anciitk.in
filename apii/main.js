function submit(){
var firebaseConfig = {
    apiKey: "AIzaSyC_ZPiVg8VFbc27Y61xbu1aPxkUqMb7jXA",
    authDomain: "anc-course-web.firebaseapp.com",
    databaseURL: "https://anc-course-web.firebaseio.com",
    projectId: "anc-course-web",
    storageBucket: "anc-course-web.appspot.com",
    messagingSenderId: "975679039332",
    appId: "1:975679039332:web:33df80da93ab705ad73c71",
    measurementId: "G-WERFNM14E7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db=firebase.firestore();
  var title=document.getElementById("title").value;
  var author=document.getElementById("author").value;
  var article=document.getElementById("article").value;
  db.collection("articles").doc(`${title}`).set({
      title:title,
      author:author,
      article:article,
  })
  .then(function(){
      alert("Article added!Press ctrl+F5 to refresh");
  })
  .catch(function() {
      alert("Error");
  })
}