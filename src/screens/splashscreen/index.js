import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {logo} from '../../assets/icons';

import styles from './splashscreenstyle';

import {StackActions, NavigationActions} from 'react-navigation';

//const resetAction = StackActions.reset({
  //index: 0,
  //actions: [NavigationActions.navigate({routeName: 'Home'})],
//});

class SplashScreen extends React.Component {
  async componentDidMount() {
        setTimeout(() => {
          this.props.fetchregion();
          this.props.fetchvilles();
          this.props.fetchcodespostales();
          this.props.navigation.navigate('AppLiv');
        }, 1000);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Bienvenue A Mechria APP'}</Text>
        <Image style={styles.logo} resizeMode={'contain'} source={logo} />
      </View>
    );
  }
}

const mapStateToProps = ({test}) => {
  return {
    test,
 };
};

export default connect(
  mapStateToProps,
  actions,
)(SplashScreen);
