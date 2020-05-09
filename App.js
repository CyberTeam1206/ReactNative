import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDNzPoNyKsSx taU0frqzVlsfKu1sAH55y4",
    authDomain: "cyberrr-8219c.firebaseapp.com",
    databaseURL: "https://cyberrr-8219c.firebaseio.com",
    projectId: "cyberrr-8219c",
    storageBucket: "cyberrr-8219c.appspot.com",
    messagingSenderId: "710526151269",
    appId: "1:710526151269:web:9dbe4b191750be8e61348c",
    measurementId: "G-DTNDER4WCV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
   Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
)
