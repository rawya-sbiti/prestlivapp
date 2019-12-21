import React from 'react';
import {ScrollView,View,Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from "react-native-elements";
//import styles from './avataritemstyle';
const CustomDrawerItem =props=> {

    return (
      <View style={{ flex: 1 }}>

        <ScrollView>
          <SafeAreaView
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View >
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avatar size='large' rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} />
                <Text >{'Hi Ahmed'}</Text>
                <Text >{'sbitirawya@gmail.com'}</Text>
              </View>
            </View>

            <DrawerItems {...props} />
            </SafeAreaView>
           </ScrollView>
           </View>
    );
}
export default CustomDrawerItem;
