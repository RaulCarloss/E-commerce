import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCCirYlJpYifBxmYP7BVfJoCcv8bv3hNAI',
  authDomain: 'club-ecommerce-531f4.firebaseapp.com',
  projectId: 'club-ecommerce-531f4',
  storageBucket: 'club-ecommerce-531f4.appspot.com',
  messagingSenderId: '315283404216',
  appId: '1:315283404216:web:fc8e7f3738c52927a64b4d'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
