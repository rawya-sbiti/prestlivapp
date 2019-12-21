import React from 'react';
import {View,} from 'react-native';
import {HeaderItem,CheckBoxItem,UserInputItem} from './../../components';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import styles from './checkprestlivscreenstyle';
class CheckPrestLivScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedprest:false,
      checkedliv:false
    }
  }
  render(){
    return(
      <HeaderItem >
      <View style={styles.container}>
      <CheckBoxItem selected={this.state.checkedprest} text={'Prestateur'} onPress={() => this.setState({checkedprest: !this.state.checkedprest})}/>
      <CheckBoxItem selected={this.state.checkedliv} text={'Livreur'} onPress={() => this.setState({checkedliv: !this.state.checkedliv})}/>
      </View>
      </HeaderItem >
    );
    }
    }





    const mapStateToProps = (state) => {
      const {regions,villes,codespostales} = state.pickerdata;
      const {error, loading, livreur} = state.livreur;
      return {regions,villes,codespostales,error, loading, livreur};
    };

    export default connect(
      mapStateToProps,
      actions,
    ) (CheckPrestLivScreen);
