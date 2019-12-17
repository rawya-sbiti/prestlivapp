import React from 'react';
import { Avatar } from "react-native-elements";
import styles from './avataritemstyle';
const AvatarItem =props=>{
  return(
    <Avatar
    size={100}
    rounded
    onPress={props.onPress}
    source={props.source}

  />
  )
}
export default AvatarItem;
