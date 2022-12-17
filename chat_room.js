//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyBB6Zro51eaHJdDDmOUE-PCTFqWm9sGxgo",
  authDomain: "lets-chat-f2345.firebaseapp.com",
  databaseURL: "https://lets-chat-f2345-default-rtdb.firebaseio.com",
  projectId: "lets-chat-f2345",
  storageBucket: "lets-chat-f2345.appspot.com",
  messagingSenderId: "567916615567",
  appId: "1:567916615567:web:73a39ab4569eb4b7495dfa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name ;

  function add_room() {
    var room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding User Name"
    });
    localStorage.setItem("room_name",room_name) ; 
    window.location="chat_page.HTML";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    var row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row ;
    //End code
    });});}
getData();

function redirect(name) {
    localStorage.setItem("room_name",name) ;
    window.location = "chat_page.HTML" ;
}

function logout() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}

