import {init} from './view-controller/route.js'

// configuracion de firebase
export const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBgWpkw-yFaHcElFT3Hu44zf8usV_FQ6l8",
        authDomain: "burguer-queen-86f94.firebaseapp.com",
        databaseURL: "https://burguer-queen-86f94.firebaseio.com",
        projectId: "burguer-queen-86f94",
        storageBucket: "",
        messagingSenderId: "802259787846",
        appId: "1:802259787846:web:32f4648600ef14ab"
      };
    firebase.initializeApp(firebaseConfig);
    };

window.addEventListener('load', () => {
  initFirebase()
  init()
});