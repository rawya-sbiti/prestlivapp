import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.color2,
    height:'50%',
    flexDirection:'column',
  },
  title: {
    color: '#000',
    fontSize: 30,
  },
  logo: {
    width: '50%',
    height:100
  },
});
