import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDMfekNu4-wws1gjb0yIW_SFVHkXV62b8',
  authDomain: 'tiktok---jornada-278af.firebaseapp.com',
  projectId: 'tiktok---jornada-278af',
  storageBucket: 'tiktok---jornada-278af.appspot.com',
  messagingSenderId: '392918383621',
  appId: '1:392918383621:web:543f25c8d02e681420706c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
