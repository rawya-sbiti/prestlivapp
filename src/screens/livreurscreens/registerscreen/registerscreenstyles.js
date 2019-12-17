import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems: 'center',

  },
  regionpickerstyle:{
    margin: 12,
    padding:18,
    alignItems: 'center',
    justifyContent: 'center',
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


  },
  buttoncontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:150,

  }
})
