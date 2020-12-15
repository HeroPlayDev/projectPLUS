import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';

import RedScreen from './pages/RedScreen';
import GreenScreen from './pages/GreenScreen';
import BlueScreen from './pages/BlueScreen';
/* 
createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
 */

 
class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('./image/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
  }
  const FirstActivity_StackNavigator = createStackNavigator({
    First: {
      screen: RedScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Red Screen',
        headerVisible: false,
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#474747',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const GreenScreen_StackNavigator = createStackNavigator({
    Second: {
      screen: GreenScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Green Screen',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  
        headerStyle: {
          backgroundColor: '#474747',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const BlueScreen_StackNavigator = createStackNavigator({
    Third: {
      screen: BlueScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Blue Screen',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#474747',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const DrawerNavigatorExample = createDrawerNavigator({
    RedScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Red Screen',
      },
    },
  
    GreenScreen: {
      screen: GreenScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Green Screen',
        
      },
    },
  
    BlueScreen: {
      screen: BlueScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Blue Screen',
      },
    },
  });
  export default createAppContainer(DrawerNavigatorExample);
  