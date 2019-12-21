import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import Geocode from "react-geocode";
import {Container,Content,} from 'native-base';
import {Header} from 'react-native-elements';
import {UserInputItem,HeaderItem,SignButtonItem,AvatarItem,CommandeListItem} from './../../../components';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as actions from '../../../redux/actions';
import {avatar} from '../../../assets/icons/';
import { ListItem } from 'react-native-elements'

//import styles from './registerscreenstyles';
class HomeScreen extends React.Component {
  componentDidMount() {

     this.props.fetchcommandes();
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
      <View style={{width:'100%',height:'100%',}}>
       <Header
        leftComponent={{ icon: 'menu', color: '#000' }}
         centerComponent={{ text: 'Commandes', style: { color: '#000',fontSize:20 } }}
         containerStyle={{
         backgroundColor: '#067D68',
         justifyContent: 'space-around',
  }}
       />
      <View >
      {this.props.loading ?  <ActivityIndicator size="large" color={'#FFFFFF'}/>:
      this.props.commandes.map((commande, i) => (
      <ListItem
        key={i}
        title={commande.name?commande.name:commande.produit_vender}
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
        onPress={()=>this.testadress()}
        />
   ))
 }


      </View>
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
) (HomeScreen);
