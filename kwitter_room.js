

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
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name ;


     function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name",room_name);
      window.location = ""
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log(Room_names);
        row  =  "<div id="+Room_names+" class = 'room_name' onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr> </hr>";
        document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

};

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}