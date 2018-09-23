import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function NumberClear({handleClear}) {
  return (
    <TouchableOpacity style={styles.numberclear__btn} onPress={handleClear}><Text>Clear</Text></TouchableOpacity>
  )
}
const styles = StyleSheet.create({

});