var firebaseConfig = {
    apiKey: "AIzaSyD4yEwDXcMoPUs2ujVB-YW8REWGdqW8O4w",
    authDomain: "azolamafilika-portfolio.firebaseapp.com",
    projectId: "azolamafilika-portfolio",
    storageBucket: "azolamafilika-portfolio.appspot.com",
    messagingSenderId: "1024947960049",
    appId: "1:1024947960049:web:5847cfffdfbd0e7f301150",
    measurementId: "G-M583GNHJP8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// variable to access database collection
 const db = firestore.collection("fornData")

 // get submit form

 let submitButton  = document.getElementById('submit')

 //create a event listener to allow form submissiion 
 submitButton.addEventListener("click", (e) =>{
     //prevent default form submision by adding a prevent default
     e.preventDefault()
     //get the form values
     let firstName = document.getElementById('first').value
     let mail = document.getElementById('mail').value
     //let message = document.getElementById('message').value

     //save form data to firebase
     db.doc().set({
       first: firstName,
       mail: mail,
      // message: message
     }).then( () =>{
        console.log("Data saved")
     }).catch((error) =>{
         console.log(error)
     })
 })
