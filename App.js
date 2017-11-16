import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screen/AuthScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import MapScreen from './screen/MapScreen';
import DeckScreen from './screen/DeckScreen';
import ReviewScreen from './screen/ReviewScreen';
import SettingScreen from './screen/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingScreen }
            }, {
                initialRouteName: 'review',
                mode: 'card',
                headerMode: 'screen'
              })
          }
        }, {
            tabBarPosition: 'bottom',
            tabBarOptions: {
              labelStyle: { fontSize: 12 }
            }
          })
      }
    }, {
        tabBarPosition: 'bottom',
        lazyLoad: true,
        swipeEnabled: false,
        animationEnabled: false
      });


    return (
      <View style={styles.containerStyle}>
        <MainNavigator />
      </View>

    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#abb',
    justifyContent: 'center'
  }
};

