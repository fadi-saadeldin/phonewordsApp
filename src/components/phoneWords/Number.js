import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
export default function Number({number, letters, handleOnClick, highlight}) {
  return (
    <TouchableOpacity onPress={handleOnClick} style={styles.numberpad__number}>
     <View>
      <Text style={styles.numberpad__number__text}>{number}</Text>
      <Text style={styles.numberpad__number__letters}>{letters}</Text>
      </View>
    </TouchableOpacity>
  )
}
  const styles = StyleSheet.create({
    numberpad__number:{
    width: '33%',
  marginBottom: 23,
  opacity: 1
    },
    numberpad__number__text:{
      fontSize: 35,
      color: '#fff',
    },
    
numberpad__number__letters:{
    fontSize: 15,
    color: '#fff',
    marginLeft: 5
  }
  });