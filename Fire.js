import FirebaseKeys from "./config";
import firebase from "firebase";
require("firebase/firestore");



class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys);
    }

     addPost(scream) {

            firebase.firestore()
                .collection("screams")
                .add({
                    body: scream.text,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    }
                )
                .then((data) => scream(data))
                .catch(error => { console.error(error)});
        };

     async getPost() {
         var screamList = [];
             var snapshot = await firebase.firestore()
                 .collection('screams')
                 .orderBy('createdAt')
                 .get()
                 snapshot.forEach((doc) =>{
                    screamList.push(doc.data());
                 })

         };


        signOut = () => {
            firebase.auth().signOut()
        };

        get firestore()
        {
            return firebase.firestore();
        }

        /*get Posts() {
        let ref = firebase
            .firestore()
            .collection("screams")
            .doc(this.screamId)
        }

        get screamId(){
            return firebase.firestore().
        }*/
        get uid()
        {
            return (firebase.auth().currentUser || {}).uid;
        }

    }

Fire.shared = new Fire();
export default Fire;
