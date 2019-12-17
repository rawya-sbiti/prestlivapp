import React from 'react';
import {View} from 'react-native';
import {UserInputItem,HeaderItem,SignButtonItem} from './../../components';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import axios from 'axios';
import styles from './signinscreenstyle';
class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    axios.get('http://mechria.com/server/country.php').
    then(response =>console.log(response.data));

}
  render(){
    const {email, password} = this.state;
    return(
      <HeaderItem >
      <View style={styles.buttoncontainer}>
      <UserInputItem
      name={'envelope-square'}
      onChangeText={email => this.setState({email: email})}
      placeholder={'Email'}
      value={this.state.email} />
      <UserInputItem
      name={'unlock-alt'}
      onChangeText={password => this.setState({password: password})}
      placeholder={'Password'}
      value={this.state.password} />
      <SignButtonItem label={'Se connecter'} loading={this.props.loading} onPress={()=>
        this.props.loginlivreur(email,password)}/>
      </View>
      </HeaderItem>

    )
  }
}
const mapStateToProps = ({livreur}) => {
  const {error, loading, livreurdata} = livreur;
  return {error, loading, livreurdata};
};

export default connect(
  mapStateToProps,
  actions,
) (SignInScreen);
