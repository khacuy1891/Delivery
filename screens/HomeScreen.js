/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';

import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <MapView
          style={{flex: 1, margin: 10}}
          showsUserLocation={true}
          region={{
            latitude: 16.064589,
            longitude: 108.223937,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }
}