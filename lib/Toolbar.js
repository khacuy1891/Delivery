//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
} from 'react-native'

import { Typo } from './Typography'
import { getColor } from './helpers'

export default class Toolbar extends Component {
  state = {
    switchValue: false,
  };

  //_onValueChange = () => this.setState(state => ({switchValue: !state.switchValue}));
  _onValueChange = (value) => {
    //this.setState(state => ({switchValue: !state.switchValue}));
    this.setState({ switchValue: value })
  };

  render() {
    const {
      backgroundColor,
      title
    } = this.props

    return (
        <View style={[ styles.toolbar, { backgroundColor: getColor(backgroundColor) } ]}>
          <Text style={styles.title} >
            {title.toUpperCase()}
          </Text>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarContent} >
            {this.state.switchValue? 'Online' : 'Offline'}
            </Text>
            <Switch style={styles.switch}
              value={this.state.switchValue}
              onValueChange={this._onValueChange} />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    color: 'white',
  },
  toolbarContent: {
    marginRight: 5,
    fontSize: 15,
    color: 'white'
  },
  switch: {
    marginRight: 5,
  },
})
