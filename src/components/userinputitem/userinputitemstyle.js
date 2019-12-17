import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  iconstyle:{
    color:colors.color2,
    height:50,

  },
  textinputstyle:{
    marginLeft:18,
    height:60,
    width:'80%'
  },
  containerstyle:{
    margin: 12,
    padding:18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'50%',
    height:60,
    borderRadius:24,
    backgroundColor:'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 8,

  }
})
