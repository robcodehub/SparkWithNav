import { Navigation } from "react-native-navigation";

//import { AppRegistry } from 'react-native'; //DELETED IN DEMO
import ViroNew from './App.js/index.js

//AppRegistry.registerComponent('ViroSample', () => App);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => ViroNew);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
        }
     }
    });
  });




// The below line is necessary for use with the TestBed App
//AppRegistry.registerComponent('ViroSample', () => App);


