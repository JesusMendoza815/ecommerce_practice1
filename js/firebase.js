// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc, //
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
/*
getFirestore: get conection of firestore
collection: permite crear una tabla (colelcion de datos)
addDoc: allow to save docs
onSnapshot: Get the actual docs
deleteDoc: allow to delete docs
doc: get jus a doc of the collection (define id)
*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJk5fIv9Zn7gFD42IPdEFDM2gy5cGhTw",
  authDomain: "practice2-8849a.firebaseapp.com",
  projectId: "practice2-8849a",
  storageBucket: "practice2-8849a.appspot.com",
  messagingSenderId: "1091596648652",
  appId: "1:1091596648652:web:39534e2a3eb33485b18269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//get firebase conection
const db = getFirestore();

//CRUD functions
//Crud save valuse on database
export const saveValues = (urlImg, title, description, price) => addDoc(collection(db, `products`), {urlImg, title, description, price});

//cRud get docs
export const onGetValues = (callback) => onSnapshot(collection(db, "products"), callback);

//cruD
export const deleteCard = id => deleteDoc(doc(db, "products", id));

//crUd
export const getCardValues = id => getDoc(doc(db, "products", id));

//crUd
export const updateCardValues = (id, newFileds) => updateDoc(doc(db, "products", id), newFileds);

//Get the actual values from the database
// export {
//   onSnapshot,
//   collection,
//   db
// }
