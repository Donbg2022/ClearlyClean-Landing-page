import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG6qP1au65ZBm2DS1C9YmFJYcaemUZ4gQ",
  authDomain: "contact-form-4abdc.firebaseapp.com",
  databaseURL: "https://contact-form-4abdc-default-rtdb.firebaseio.com/",
  projectId: "contact-form-4abdc",
  storageBucket: "contact-form-4abdc.appspot.com",
  messagingSenderId: "221768656405",
  appId: "1:221768656405:web:66e428a9b18afa5bf6101c",
  measurementId: "G-V8VJPM5YGX"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const db = getFirestore(app);


// reference messages coollection

const submitted = document.querySelector('#contactform');
submitted.addEventListener("submit", async (e) => {
  e.preventDefault();

  //getting the values
  let name = getInputValue('name')
  let email = getInputValue('email')
  let address = getInputValue('address')
  let city = getInputValue('city')
  let bedrooms = getInputValue('bedrooms')
  let washrooms = getInputValue('washrooms')
  let interval = getInputValue('int')


  //show alert and bring view to it
  document.querySelector('#thanks').style.display = 'block'
  scrollTop()


  //pop up goes away 

  setTimeout(function(){
    document.querySelector('#thanks').style.display = 'none' }, 6000
 )

  //creating firebase form values
try {
  const docRef = await addDoc(collection(db, "users"), {
   Name: name,
    Email: email,
    Address: address,
    City: city,
    Bedrooms: bedrooms,
    Washrooms: washrooms,
    interval: interval
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

})

function getInputValue(id){
    return document.getElementById(id).value
}
// function to scroll to top when submit is clicked
let scrollTop = function() {
  window.scrollTo(0, 0);
};