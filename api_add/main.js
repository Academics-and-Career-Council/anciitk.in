function myFunction() {
  var firebaseConfig = {
    apiKey: "AIzaSyC_ZPiVg8VFbc27Y61xbu1aPxkUqMb7jXA",
    authDomain: "anc-course-web.firebaseapp.com",
    databaseURL: "https://anc-course-web.firebaseio.com",
    projectId: "anc-course-web",
    storageBucket: "anc-course-web.appspot.com",
    messagingSenderId: "975679039332",
    appId: "1:975679039332:web:33df80da93ab705ad73c71",
    measurementId: "G-WERFNM14E7",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
  var name = document.getElementById("name").value;
 var flag=0
  var desp = document.getElementById("desp").value;
  links = [];
  let i = 0;
 
  if(document.getElementById("exist").checked)
  {
      var type=(document.getElementById("exist").value);
  }
  else if(document.getElementById("new").checked)
  {
     var type=(document.getElementById("new").value);
  }
 
  for (i = 0; i < 5; i++) {
      if(document.getElementById("l"+(i + 1)).value != "")
    {
        links[flag] = document.getElementById("l"+(i + 1)).value;
        flag=flag+1;
}       
  }

  
  var db = firebase.firestore();
  if (type == "exist") {
    var cityRef = db.collection("Collection").doc(String(name));
    cityRef.get().then(function(doc) {
        if (doc.exists) {        
          links= links.concat(doc.data().links);
             console.log(links);
            var setWithMerge = cityRef.set(
              {        
                links: links,
              },
              { merge: true }
            );
            alert("Document Updated! Press Ctrl+R to add a new Doc.");
        } else {
            alert("No such document!");
        }
    }).catch(function(error) {
        alert("Error getting document:", error);
    });
    
   
  }
  else if(type == 'new')
  {

    db.collection("Collection").doc(String(name)).set({
        Description:desp,
        links:links
    })
    .then(function(){

        alert("Document Added! Press Ctrl+R to add a new document.");
    })
    .catch(function(){
        alert("Failed to add Document!");
    })
  } 
}
function f1(id)
{
if(id=="exist")
{
document.getElementById("desp").disabled=true;
}
else if(id=="new")
{
  document.getElementById("desp").disabled=false;
}
}
