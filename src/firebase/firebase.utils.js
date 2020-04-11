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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;