import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {getPhoneWords,clearWords,phoneChanged} from '../../actions';
import NumberPad from '../phoneWords/NumberPad'
import NumberInput from '../phoneWords/NumberInput'
import NumberClear from '../phoneWords/NumberClear'
import Phonewords from '../phoneWords/Phonewords'
import {View,StyleSheet,ScrollView} from 'react-native';
class Landing extends Component {
  constructor() {
    super()
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleInput(numbers) {
   this.props.phoneChanged(numbers);
   if(numbers){
   this.props.getPhoneWords(numbers);
  }
}

  handleClick(number) {
    console.log(number);
    this.props.phoneChanged(this.props.phone+number);
    this.props.getPhoneWords(this.props.phone+number);
  }

  handleClear() {
  this.props.clearWords();
  }

  

  render () {


    return (
      <ScrollView  style={styles.wrapper}>
        <NumberInput
          value={this.props.phone}
          handleChange={this.handleInput}
        />
        <NumberPad
          handleOnClick={this.handleClick}
        />
        { this.props.phone.length > 0 &&
          <NumberClear
            handleClear={this.handleClear}
          />
        }
        <Phonewords phonewords={this.props.wordsList} />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'#000',
  }
});
const mapStateToProps =({phonewords})=>{
const {wordsList,phone,error}=phonewords;
console.log(wordsList);
return {wordsList,phone,error};

}

export default connect(mapStateToProps,{getPhoneWords,clearWords,phoneChanged})(
  Landing
);