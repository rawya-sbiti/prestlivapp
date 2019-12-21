import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import Geocode from "react-geocode";
import {Header} from 'react-native-elements';
import {UserInputItem,HeaderItem,SignButtonItem,AvatarItem,CommandeListItem} from './../../../components';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as actions from '../../../redux/actions';
import { ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import styles from './commandedetailsscreenstyle';
class CommandeDetailScreen extends React.Component {
  componentDidMount() {
  }
  testadress=()=>{
  Geocode.setApiKey("AIzaSyAaDOaDbtQQ-dP6f4FN4sXL6l8aqlFLXYQ");
 Geocode.setLanguage("fr");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("tn");

// Get latidude & longitude from address.
Geocode.fromAddress("Ariana,Ariana Ville 2027").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.log(error);
  }
);
  }
  render(){
    return(
      <View style={{width:'100%',height:'100%',flex:1,}}>
       <Header
        leftComponent={{ icon: 'menu', color: '#000' }}
         centerComponent={{ text: 'Détails', style: { color: '#000',fontSize:20 } }}
         containerStyle={{
         backgroundColor: '#067D68',
         justifyContent: 'space-around',
  }}
       />
      <MapView
   initialRegion={{
     latitude: 36.8665367,
     longitude: 10.1647233,
     latitudeDelta: 0.0922,
     longitudeDelta: 0.0421,
   }}
   style={styles.map}
 >
 <Marker
    coordinate={{latitude: 36.8665367, longitude: 10.1647233}}
    title={'title'}
    description={'description'}
  />
  </MapView>

      </View>

    )
  }
}
const mapStateToProps = (state) => {
  const {error, loading,commandes,ids,adresssources} = state.commandes;
  const {livreur} = state.livreur;
  return {commandes,error, loading, livreur};
};

export default connect(
  mapStateToProps,
  actions,
) (CommandeDetailScreen);
