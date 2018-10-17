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

export default class MyStatusBar extends Component {
  render() {
    const {
      backgroundColor,
    } = this.props

    return (
      <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
})
