import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import App from './App.js';
import Lightbox from './Lightbox.js';
import ModalLoader from './ModalLoader.js';
import Notificacion from './Notificacion.js';

export function registerScreens() {
  //Root
    Navigation.registerComponent('App', () => App);
    Navigation.registerComponent('Lightbox', () => Lightbox);
    Navigation.registerComponent('ModalLoader', () => ModalLoader);
    Navigation.registerComponent('Notificacion', () => Notificacion);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}