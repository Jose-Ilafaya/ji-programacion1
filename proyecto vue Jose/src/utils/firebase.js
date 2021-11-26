import{initializeApp } from'firebase/app'
import {getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyChJVBIktg_XvwHxNSNTp1S4rDVnFCg2ls",
    authDomain: "programacion-i-cet-30.firebaseapp.com",
    projectId: "programacion-i-cet-30",
    storageBucket: "programacion-i-cet-30.appspot.com",
    messagingSenderId: "240533987965",
    appId: "1:240533987965:web:4a5900dd06b31836c44714",
    measurementId: "G-KST8PGLZ8V"
  };
  // esto inicia la conexion con firestore
  const app= initializeApp(firebaseConfig);
  //iniciamos conexion con el servicio de firestore
  const db = getFirestore()
  const storage = getStorage(app)
//export default apto solo para firebase v8
const auth= getAuth();
export {db,storage,auth};