import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  buttonstyle:{
    height:50,
    width:'50%',
    borderRadius:24,
    backgroundColor:colors.color1,
    marginTop:18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 8,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textstyle:{
    position:'absolute',
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    top:15,
  }
});
