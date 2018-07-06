import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';
// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'App', // unique ID registered with Navigation.registerScreen
    title: 'Todo - App', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {navBarHidden: false}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {
      fab: {
        collapsedId: 'add',
        collapsedIcon: require('./assets/addA.png'),
        collapsedIconColor: 'white', // optional
        backgroundColor: '#E91E63',
        hideOnScroll: true
      }
    }
  },
  appStyle: {
    orientation: 'portrait',
    statusBarColor: '#C2185B', // change the color of the status bar.
    statusBarTextColorScheme: 'light', // text color of status bar, 'dark' / 'light' (remembered across pushes)
    navBarBackgroundColor: '#E91E63',
    navBarTextColor: '#fff',
    navBarButtonColor: '#fff'
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});

//todo-app-69e13