import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCsZbLA82Z92IgZIQbysvu8JnsN6FbDZyg",
    authDomain: "shopping-cloths-bc429.firebaseapp.com",
    projectId: "shopping-cloths-bc429",
    storageBucket: "shopping-cloths-bc429.appspot.com",
    messagingSenderId: "374051628716",
    appId: "1:374051628716:web:04bb29847e6a5a3cb7e109",
    measurementId: "G-MX1BTZVDWD"
  };

  firebase.initializeApp(firebaseConfig);

  export const createUserProfileDocument = async (userAuth, addittionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
   

    const snapShot = await userRef.get()
   

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName ,
                email,
                createdAt,
                ...addittionalData
            })
        }catch(error){
            console.log('error creating user', error.message )
        }
    }
    return userRef;
  }


 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
console.log(collectionRef)


 }

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

