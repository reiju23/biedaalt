import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  let background = 'green';
  return (
    <View style={[styles.container, {backgroundColor:background}]}>
      <Text style={[styles.textStyle , {color:'black'}]}>This is my first app yeah!</Text>
      <TouchableOpacity onPress={()=>{
        alert('Hellow World!!!')
        background = 'red' }}>
        <Text>Red background</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40
  }
});
