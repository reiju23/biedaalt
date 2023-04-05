import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/navigation/Appnavigator'



export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}