import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCg-j_vzBdiGwAbzceYFpLeteVbRCN3-8s',
  authDomain: 'ecommerce-react-9f810.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-9f810.firebaseio.com',
  projectId: 'ecommerce-react-9f810',
  storageBucket: 'ecommerce-react-9f810.appspot.com',
  messagingSenderId: '90736283527',
  appId: '1:90736283527:web:337779a5ec7c8913bd4d22'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;