import React, {Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

import Number from './Number'

export default class Phonewords extends  Component {
  render() {
    const {phonewords} = this.props

    return (
      <View style={styles.phonewords}>
        {phonewords.map(word => (
          <Text style={styles.phoneword} key={word}>{word}</Text>
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  phonewords:{
flex:1,
    marginTop:20,
    justifyContent:'space-between',
alignItems:'center',
flexDirection:'row',
flexWrap:'wrap',
  },
phoneword:{
  fontSize: 12,
  color:'#fff',
  width:'10%'
}
});
