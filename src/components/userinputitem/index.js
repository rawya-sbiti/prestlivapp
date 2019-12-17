import React from 'react';
import {View,TextInput} from 'react-native';
import styles from './userinputitemstyle';
import { Icon } from 'react-native-elements';

const UserInputItem =props =>{

  return(
    <View style={styles.containerstyle}>
    <Icon
     name={props.name}
     type='font-awesome'
     color='#50D5B78'
     iconStyle={styles.iconStyle}
    />
    <TextInput
      style={styles.textinputstyle}
      onChangeText={props.onChangeText}
      placeholderTextColor={'gray'}
      placeholder={props.placeholder}
      autoCorrect={false}
      value={props.value}
    />
    </View >
  )
};
export default UserInputItem;
