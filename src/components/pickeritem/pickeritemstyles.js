import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  pickerArrowIcon: {
    height: 16,
    width: 16,
  },
  picker: {
    height: 56,
    width: '75%',
    backgroundColor: 'white',
    marginLeft: 12,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  pickerText: {
    fontSize: 18,
    textAlign: 'left',
  },
  pickerItemButton: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 2,
  },
  pickerItemText: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 15,
  },
})
