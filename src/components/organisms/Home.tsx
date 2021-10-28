import React from 'react';
import { View, Text } from 'react-native';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    {
        url: '../assets/images/image01.jpg',
        caption: 'First Slide'
    },
    {
        url: '../assets/images/image01.jpg',
        caption: 'Second Slide'
    },
    {
        url: '../assets/images/image01.jpg',
        caption: 'Third Slide'
    },
];

const Home : React.FC = () => {
    return(
        <View style={{flex:6}}>
            <View style={{flex:1}}>
                <Text></Text>
            </View>
            <View style={{flex:4}}>
                <Text>
                    Home    
                </Text>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
    )
}

export default Home;