

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBklYBoiTkaoYl4Q1B8iUuH6U_bxninrNs",
    authDomain: "login-8a262.firebaseapp.com",
    databaseURL: "https://login-8a262.firebaseio.com",
    projectId: "login-8a262",
    storageBucket: "login-8a262.appspot.com",
    messagingSenderId: "737178664611"
  };
  
 firebase.initializeApp(config);
 var fireheading = document.getElementById("fireheading");
 var fire = firebase.database().ref().child("Icecream");
 fire.on('value',function(datasnapshot){
	 fireheading.innerText = datasnapshot.val();
	 
 });


