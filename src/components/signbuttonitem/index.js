import React from 'react';
import {TouchableOpacity,Text,ActivityIndicator} from 'react-native';
import styles from './signbuttonitemstyles';
const SignButtonItem =props=>{
  return(
    <TouchableOpacity style={styles.buttonstyle} onPress={props.onPress}>
    {  props.loading ?
      <ActivityIndicator size="large" color={'#FFFFFF'}/>:
    <Text style={styles.textstyle}>{props.label}</Text>
  }
    </TouchableOpacity>
  )
}
export default SignButtonItem;
