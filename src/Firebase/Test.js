import firebase from 'firebase/compat/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firebase.collection('users').doc('6u38SLQYCgrG18qIPW07').collection('cardItems').doc("RZbMCwDBkLERWvVCw9gu")
firestore.doc('users/6u38SLQYCgrG18qIPW07/cardItems/RZbMCwDBkLERWvVCw9gu')
firestore.collection('users/6u38SLQYCgrG18qIPW07/cardItems')