import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import  Header  from './components/Header';
import StartGameScreen from './screens/StartGameScreen.js'
export default function App() {
  const[output,setOutput]=useState('fnh ana')
  return (
    <View style={styles.screen}>
    <Header title="Guess a Number"/>
    <StartGameScreen/>
      {/* <StatusBar style="auto"  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
    flex: 1,
    backgroundColor: '#8255',
   
  },
});
