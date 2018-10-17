/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, TextInput, Button, Dimensions, StyleSheet} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Colors from '../constants/Colors';

var { height, width } = Dimensions.get('window');

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.pw = React.createRef();
  }

  state = {
    phone: '',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{marginTop: 80, fontSize: 30}}>ForgotPassword</Text>
        <View style={{ marginTop: 20, width: '80%', alignItems: 'center' }}>
          <TextField
            label='Email'
            value={this.state.phone}
            onChangeText={ (value) => this.setState({ phone: value }) }
          />
          <TextInput
            style={styles.textInput}
            ref={this.email}
            onSubmitEditing={() => this.pw.current.focus()}
            returnKeyType="next"
            keyboardType="email-address"
            placeholder="Email"/>
          <TextInput
            style={styles.textInput}
            ref={this.pw}
            onChangeText={(value) => console.log(value)}
            placeholder="Password"/>
        </View>
        <View style={{ marginTop: 20, width: '80%' }}>
          <Button
            title="Login"
            color={Colors.colorAccent}
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    width: width - 40,
    borderColor: 'gray',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});