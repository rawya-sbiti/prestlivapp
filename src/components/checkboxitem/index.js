import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../assets/color';


import styles from './checkboxitemstyle'

import { TouchableOpacity, Text } from 'react-native'

const CheckBoxItem = props => (
    <TouchableOpacity style={styles.checkBox} onPress={props.onPress} >
        <Icon
            size={40}
            color={colors.color2}
            name={ props.selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={styles.textstyle}> {props.text} </Text>
    </TouchableOpacity>
)

export default CheckBoxItem
