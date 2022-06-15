// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc,
  getDocs,
  onSnapshot
 } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
/*
getFirestore: get conection of firestore
collection: permite crear una tabla (colelcion de datos)
addDoc: allow to save docs

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

//C-rud save valuse on database
export const saveValues = (urlImg, title, description, price) => addDoc(collection(db, `products`), {urlImg, title, description, price});

//C-rud get docs
export const onGetValues = (callback) => onSnapshot(collection(db, "products"), callback);

export {
  onSnapshot,
  collection,
  db
}



//C-rud getDocs from database
export const getValues = () => 
//a collection se le pasa la conexion de la base de datos y la collecion a la que se quiere acceder
  getDocs(collection(db, `products`));
