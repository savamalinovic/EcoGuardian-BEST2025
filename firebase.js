import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './App';
import { Firebase } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBqoIDuEdZB42ei_D7VeDKtsgbGSbMvTIw',
  projectId: 'mojekosticenik',
  messagingSenderId: '4249511120',
  appId: '1:4249511120:android:b8639629c04cdb4dffaad5',
};

Firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);

export default firebaseConfig;