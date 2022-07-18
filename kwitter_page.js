var firebaseConfig = {
      apiKey: "AIzaSyB303DEOVXHTnqkkMKgAo-uUj4x0QfTroo",
      authDomain: "kwitter-42a98.firebaseapp.com",
      databaseURL: "https://kwitter-42a98-default-rtdb.firebaseio.com",
      projectId: "kwitter-42a98",
      storageBucket: "kwitter-42a98.appspot.com",
      messagingSenderId: "415333451524",
      appId: "1:415333451524:web:688631e20c1aaa7b543251",
      measurementId: "G-VSB6NRD9G2"
    };
    
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send(){
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });

      document.getElementById("msg").value = "";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(message_data);
console.log(firebase_message_id);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_tag = "<h4>"+name+ "<img class='user_tick' src='tick.png'></h4>";
message_tag = "<h4 class='message_h4'>"+message+ "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon_thumbs-up'>Like:" +like+"</span></button><hr>";

row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();


function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function updateLike(message_id){
      console.log("like button has been clicked" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}
