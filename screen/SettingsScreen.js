import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingScreen extends Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        return (
            <View>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

export default SettingScreen;
