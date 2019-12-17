import React from 'react';
import {View,Image,ScrollView} from 'react-native';
import styles from './headeritemstyle';
import {logo} from './../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
const HeaderItem =props=>{
  return(
    <ScrollView contentContainerStyle={{ paddingBottom:700 }}>
    <View style={styles.container}>
    <LinearGradient colors={['#067D68', '#50D5B7']} style={styles.headerstyle} >
    <Image style={styles.logostyle} source={logo} resizeMode={'contain'}/>
    </LinearGradient>
    {props.children}
    </View>
    </ScrollView>

  )
}
export default HeaderItem;
