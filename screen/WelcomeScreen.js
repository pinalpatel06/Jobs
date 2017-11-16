import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../component/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4' },
    { text: 'Use this App tp get Job', color: '#009688' },
    { text: 'Set your location, thens swipe', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    onSlideComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete.bind(this)} />
        );
    }
}

export default WelcomeScreen;
