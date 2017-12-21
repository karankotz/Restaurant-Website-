(function(){
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

  
  //Get all the elements 
  const txtEmail= document.getElementById('txtEmail');
   const txtPassword= document.getElementById('txtPassword');
    const btnLogin= document.getElementById('btnLogin');
	 const btnSignUp= document.getElementById('btnSignUp');
	  const btnLogout= document.getElementById('btnLogout');
	  
	  
	  //Add the Login Event 
	  btnLogin.addEventListener('click', e=>{
		  //Get the email and password
		  const email = txtEmail.value;
		  const pass = txtPassword.value;
		  const auth = firebase.auth();
		  //Sign in
		  const promise = auth.signInWithEmailAndPassword(email, pass);
		  promise.catch(e => alert(e.message));
		  //window.location.replace("user.html");
		  
});
 //Add the signup event
 btnSignUp.addEventListener('click', e=>{
	 console.log('in signup now');
	  //Get the email and password
		  const email = txtEmail.value;
		  const pass = txtPassword.value;
		  const auth = firebase.auth();
		  //Sign in
		  const promise = auth.createUserWithEmailAndPassword(email, pass);
		  promise.catch(e => alert(e.message));
		  alert("Sign up complete Please login using the user id and password");
		  

 });
 
  btnLogout.addEventListener('click', e=>{
	  firebase.auth().signOut();
  });
 
 //Add a realtime listener 
 firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser)
	{
	 console.log(firebaseUser);
	 window.location = 'user.html'; 
	 //btnLogout.classList.remove('hide');
	}
	else
	{
     console.log(firebaseUser);
	 console.log('not logged in');
	 btnLogout.classList.add('hide');
	}
 });
 
 
 
 

}());


