/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Button, Switch} from 'react-native';

import { createStackNavigator, createBottomTabNavigator, TabRouter } from 'react-navigation';
import { Toolbar, BottomNavigation } from 'react-native-material-ui';

// import BottomNavigation, {
//   FullTab
// } from 'react-native-material-bottom-navigation'

//import Icon from '@expo/vector-icons/MaterialCommunityIcons'

//import AppNavigator from '../navigation/AppNavigator'

import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';

import MyStatusBar from '../component/MyStatusBar'
import COLOR from '../constants/Colors';
//import { Switch } from 'react-native-gesture-handler';

const DashboardStack = TabRouter (
  {
		Home: HomeScreen,
		Order: OrderScreen,
		History: HistoryScreen,
		Profile: ProfileScreen,
  },
  {
    //initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null,
    },
  }
);

class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.activeTab,
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.activeTab,
    }); 
  }

  render() {
    const Component = DashboardStack.getComponentForRouteName(this.state.active);
    return <Component/>;
  }
}

export default class DashboardScreen extends React.Component {  
  state = {
    activeTab: 'Home',
    switchValue: false,
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <MyStatusBar backgroundColor='#EF6C00'/>
				<Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('ForgotPassword')}
          style={{backgroundColor: COLOR.colorAccent}}
          centerElement={this.state.activeTab.toUpperCase()}
          rightElement={
            <View style={{ flexDirection: 'row', alignItems:'center'}}> 
              <Text style={{color:'white'}}>{this.state.switchValue ? "Online" : "Offline"}</Text>
              <Switch               
                  trackColor={COLOR.colorPrimary}
                  thumbColor={COLOR.colorPrimary} 
                  onValueChange={value => this.setState({switchValue: value})}
                  value={this.state.switchValue}
              />
            </View>
          }
          style={{
            container: { backgroundColor: COLOR.colorAccent },
          }}
				/>

        <TabContentNavigator value={this.state} key={this.state} />

        <BottomNavigation active={this.state.activeTab} hidden={false}
          style={{
            container: { backgroundColor: COLOR.colorAccent, borderColor: 'white' },
            tintColor: 'white',
          }} >
					<BottomNavigation.Action
						key="Home"
						icon="home"
						label="Home"
						onPress={() => this.setState({ activeTab: 'Home' })}
					/>
					<BottomNavigation.Action
						key="Order"
						icon="people"
						label="Order"
						onPress={() => this.setState({ activeTab: 'Order' })}
					/>
					<BottomNavigation.Action
						key="History"
						icon="bookmark-border"
						label="History"
						onPress={() => this.setState({ activeTab: 'History' })}
					/>
					<BottomNavigation.Action
						key="Profile"
						icon="settings"
						label="Profile"
						onPress={() => this.setState({ activeTab: 'Profile' })}
					/>
				</BottomNavigation>
      </View>
    );
  }
}