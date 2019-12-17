import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  headerstyle:{
    height:'40%',
    borderBottomLeftRadius:100,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.36,
    elevation: 11,
    alignItems:'center',
    justifyContent:'center'
  },
  logostyle:{
    width:'50%',
    height:50,

  },
  container:{
  width:width,
  height:height

  },
})
