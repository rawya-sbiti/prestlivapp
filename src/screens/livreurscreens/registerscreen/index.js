import React from 'react';
import {View,} from 'react-native';
import {UserInputItem,HeaderItem,SignButtonItem,AvatarItem} from './../../../components';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import {avatar} from '../../../assets/icons/';
import ImagePicker from 'react-native-image-picker';
import { CustomPicker } from 'react-native-custom-picker'
import styles from './registerscreenstyles';
class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villes:[],
      codespostales:[],
      email: '',
      password: '',
      name:'',
      surname:'',
      phone:'',
      vehicule:'',
      region:'',
      ville:'',
      cdpostale:'',
      adresse:'',
      horaire:'',
      avatar:avatar,
    };
  }
  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      {title: 'Choisissez Une Image', maxWidth: 800, maxHeight: 600},
      res => {
        if (res.didCancel) {
          console.log('User cancelled!');
        } else if (res.error) {
          console.log('Error', res.error);
        } else {
          this.setState({
            avatar: {uri: res.uri},
          });
          console.log(this.state.avatar);
        }
      },
    );
  };
 filter_array(test_array) {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
        const value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

  render(){
    const {email, password,name,surname,phone,vehicule} = this.state;
    const regions=this.props.regions.map(region => { return region.country_name });
    return(
      <HeaderItem >
      <View style={styles.buttoncontainer}>
      <AvatarItem source={this.state.avatar} onPress={this.pickImageHandler}/>
      <UserInputItem
      onChangeText={text => this.setState({name: text})}
      placeholder={'Nom'}
      value={this.state.name} />
      <UserInputItem
      onChangeText={text => this.setState({surname: text})}
      placeholder={'Prénom'}
      value={this.state.surname} />
      <UserInputItem
      name={'envelope-square'}
      onChangeText={text => this.setState({email: text})}
      placeholder={'Email'}
      value={this.state.email} />
      <UserInputItem
      name={'phone-square'}
      onChangeText={text => this.setState({phone: text})}
      placeholder={'Téléphone'}
      value={this.state.phone} />
      <CustomPicker
      containerStyle={styles.regionpickerstyle}
          options={['vespa','taxi','vélo','voiture','berlingo']}
          onValueChange={value => {
            this.setState({vehicule: value});
          }}
          placeholder={'Type de Vihécule'}
        />
        <CustomPicker
        containerStyle={styles.regionpickerstyle}
            options={regions}
            onValueChange={value => {
              this.setState({region: value});
              const id=this.props.regions[this.props.regions.findIndex(obj => obj.country_name === value)].country_id;
              var newsvilles=this.props.villes.map(ville => {
                if(ville.country_id===id)
                return ville.state_name });
                newsvilles=this.filter_array(newsvilles);
                this.setState({villes:newsvilles})

            }}
            placeholder={'Région'}
          />
          <CustomPicker
          containerStyle={styles.regionpickerstyle}
              options={this.state.villes}
              onValueChange={value => {
                this.setState({ville: value});
                const id=this.props.villes[this.props.villes.findIndex(obj => obj.state_name === value)].state_id;
                var newsvilles=this.props.codespostales.map(codepostale => {
                  if(codepostale.state_id===id)
                  return codepostale.city_name });
                  newsvilles=this.filter_array(newsvilles);
                  this.setState({codespostales:newsvilles})
              }}
              placeholder={'Ville'}
            />
            <CustomPicker
            containerStyle={styles.regionpickerstyle}
                options={this.state.codespostales}
                onValueChange={value => {
                  this.setState({cdpostale: value});
                }}
                placeholder={'Code Postale'}
              />
              <UserInputItem
              name={'address-card'}
              onChangeText={adresse => this.setState({adresse: adresse})}
              placeholder={'adresse'}
              value={this.state.adresse} />
              <CustomPicker
              containerStyle={styles.regionpickerstyle}
                  options={['08=>12','14=>18','19=>00']}
                  onValueChange={value => {
                    this.setState({horaire: value});
                  }}
                  placeholder={'Horaire de travail'}
                />
            <UserInputItem
             name={'unlock-alt'}
             onChangeText={password => this.setState({password: password})}
             placeholder={'Password'}
             value={this.state.password} />
           <SignButtonItem label={'Créer un compte'} loading={this.props.loading} onPress={()=>
             this.props.registerlivreur(name,surname,email,phone,vehicule,password)} />
            </View>
           </HeaderItem >

    )
  }
}
const mapStateToProps = (state) => {
  const {regions,villes,codespostales} = state.pickerdata;
  const {error, loading, livreurdata} = state.livreur;
  return {regions,villes,codespostales,error, loading, livreurdata};
};

export default connect(
  mapStateToProps,
  actions,
) (RegisterScreen);
