import React from 'react'
import {View,text,StyleSheet,TouchableOpacity,TextInput,Dimensions} from 'react-native';
var { height, width } = Dimensions.get('window');

export default function NumberInput({value, handleChange}) {
  return (
    <TextInput
      style={styles.numberinput}
      value={value}
      onChangeText={handleChange}
    />
  )
}
const styles = StyleSheet.create({
  numberinput:{
  width: width,
  backgroundColor: 'transparent',
  fontSize: 30,
  color: '#fff',
  textAlign: 'center',
  marginTop: 20,
marginBottom:40,  
}
});