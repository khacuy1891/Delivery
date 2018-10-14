import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import MyStatusBar from '../lib/MyStatusBar'
import { Toolbar, BottomNavigation } from 'react-native-material-ui';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';

// import NavigationTop from './navigation/NavigationTop.js'
import { getColor } from '../lib/helpers'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Orders: { screen: OrderScreen },
});

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };

  state = {
    active: 'home'
  };

  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor='#EF6C00'/>
        {/* <Toolbar title="HOME" backgroundColor='#FF5925'/> */}
        <Toolbar
          centerElement="HOME"
          rightElement="menu"
          onLeftElementPress={() => this.props.navigation.goBack()}
        />
        <RootStack />
        <BottomNavigation active={this.state.active}>
            <BottomNavigation.Action
                key="home"
                icon="home"
                label="Home"
                onPress={this._navigateHomeScreen}
            />
            <BottomNavigation.Action
                key="order"
                icon="people"
                label="Orders"
                onPress={() => this.setState({ active: 'order' })}
            />
            <BottomNavigation.Action
                key="history"
                icon="bookmark-border"
                label="History"
                onPress={() => this.setState({ active: 'history' })}
            />
            <BottomNavigation.Action
                key="profile"
                icon="settings"
                label="Profile"
                onPress={() => this.setState({ active: 'profile' })}
            />
        </BottomNavigation>
      </View>
    );
  }

  _navigateHomeScreen = () => {
    this.setState({ active: 'home' });
    this.props.RootStack('Orders');
  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolBar: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
