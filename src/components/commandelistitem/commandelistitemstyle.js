import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../assets/color';
const width = Dimensions.get('window').width;
export default StyleSheet.create({
  iconstyle:{
    height:30,
    marginLeft:20
  },
  cardstyle:{
    width:width,
    shadowColor: '#FFFFFF',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 8,

  },
  textstyle:{
    marginLeft:20,

  },
  firstcontainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'50%',
  },
  secondcontainer:{
    alignItems:'center',
    justifyContent: 'flex-end',
    width:'50%',

  },
  iconright:{
    marginLeft:'70%'

  }


});
