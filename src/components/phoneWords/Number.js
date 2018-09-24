import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
export default function Number({number, letters, handleOnClick, highlight}) {
  return (
    <TouchableOpacity onPress={handleOnClick} style={styles.numberpad__number}>
      <Text style={styles.numberpad__number__text}>{number}</Text>
      <Text style={styles.numberpad__number__letters}>{letters}</Text>
    </TouchableOpacity>
  )
}
  const styles = StyleSheet.create({
    numberpad__number:{
    width: '33%',
    alignSelf: 'center',
  marginBottom: 23,
  opacity: 1,
  justifyContent:'center'
    },
    numberpad__number__text:{
      fontSize: 35,
      color: '#fff',
      alignSelf: 'center',
    },
    
numberpad__number__letters:{
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 5
  }
  });