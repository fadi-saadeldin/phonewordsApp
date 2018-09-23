import React, {Component} from 'react'
import {View} from 'react-native';
import Number from './Number'
import {StyleSheet,Dimensions} from 'react-native';
var { height, width } = Dimensions.get('window');
export default class NumberPad extends Component {
  render() {
    const numbers = [
      { number: '1', letters: ' '},
      { number: '2', letters: 'abc'},
      { number: '3', letters: 'def'},
      { number: '4', letters: 'ghi'},
      { number: '5', letters: 'jkl'},
      { number: '6', letters: 'mno'},
      { number: '7', letters: 'pqrs'},
      { number: '8', letters: 'tuv'},
      { number: '9', letters: 'wxyz'},
      { number: '*', letters: ''},
      { number: '0', letters: ''},
      { number: '#', letters: ''}
    ]
    const {handleOnClick} = this.props

    return (
      <View style={styles.numberpad}>
        {numbers.map(num => (
          <Number
            key={num.number}
            number={num.number}
            letters={num.letters}
            handleOnClick={() => {handleOnClick(num.number)}}
            highlight={num.number === '*' || num.number === '#'}
          />
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  numberpad:{
    width: width,
flex:1,
justifyContent:'space-between',
alignItems:'stretch',
flexDirection:'row',
flexWrap:'wrap',
    // margin: 0 auto,
    textAlign: 'center',
  }
});