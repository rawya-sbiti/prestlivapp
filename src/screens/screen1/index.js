import React from 'react';
import {View} from 'react-native';
import {SignButtonItem,HeaderItem} from './../../components';
import styles from './screen1styles';
class Screen1 extends React.Component {
  render(){
    return(
      <HeaderItem >
      <View style={styles.buttoncontainer}>
      <SignButtonItem label={'Creer un compte'}/>
      <SignButtonItem label={'Se connecter'}/>
      </View>
      </HeaderItem >

    )
  }
}
export default Screen1;
