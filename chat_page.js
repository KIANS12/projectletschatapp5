//YOUR FIRE BASE LINKS
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
  var user_name = localStorage.getItem("user_name") ;
  var room_name = localStorage.getItem("room_name") ;
  function send() {
      var msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            Like:0
      });
      document.getElementById("msg").value="" ;
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
    console.log(firebase_message_id);    
    console.log(message_data);
  
    var name=message_data["Name"];
    var msg=message_data["Message"];
    var like=message_data["Like"];
  
    var name_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
    var message_tag="<h4 class='message_h4'>"+msg+"</h4>";
    var button_tag="<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" onclick='updatelike(this.id)'>Like :  "+like+"</button>";
    row=name_tag+message_tag+button_tag;
    document.getElementById("output").innerHTML+=row;
      } });  }); }
  getData();
  
  function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
          Like:updatedlikes
      
      });
  }
  function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
  }
  



