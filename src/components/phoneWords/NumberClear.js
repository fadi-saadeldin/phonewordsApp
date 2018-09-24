import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function NumberClear({handleClear}) {
  return (
    <TouchableOpacity style={styles.numberclear__btn} onPress={handleClear}><Text>Clear</Text></TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  numberclear__btn:{
    color: '#000',
    backgroundColor: '#fff',
    width: 52,
    borderRadius: 42,
    fontSize: 13,
    alignSelf:'center',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:7,
    paddingRight:5,

  }

});