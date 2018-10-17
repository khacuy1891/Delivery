//
// Statusbar Component
//
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native'

export default class SwitchButton extends Component {
  render() {
    const {
      backgroundColor,
    } = this.props

    return (
      <View style={styles.container}> 
        <Text style={styles.text}>{this.state.switchValue ? "Online" : "Offline"}</Text>
        <Switch                
            onValueChange={value => this.setState({switchValue: value})}
            value={this.state.switchValue}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color:'white',
  },
})
