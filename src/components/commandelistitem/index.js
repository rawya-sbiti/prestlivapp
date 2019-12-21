import React from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import { ListItem } from 'react-native-elements'
//import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './commandelistitemstyle';
import colors from '../../assets/color';
const CommandeListItem =props=>{
  return(
    <ListItem
      key={props.key}
      title={props.name}
      leftElement={<Icon
         size={30}
         color={'#50D5B7'}
         name={ 'shopping-bag'}
    />}
      bottomDivider
      rightElement={<Icon
          size={20}
          color={'#BABDBF'}
          name={ 'chevron-right'}
      />}
      />

  )
}
export default CommandeListItem;
