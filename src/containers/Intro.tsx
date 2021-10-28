import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Stack from '../navigation/Stack';

function Intro() {
    return (

        <View style={styles.container}>
        
        <Stack/>

        <Text style={styles.greeting}>

        </Text>
        <View>
            <Button
                title="Increase enthusiasm"
                accessibilityLabel="increment"
                color="blue"
                />
            <Button
                title="Decrease enthusiasm"
                accessibilityLabel="decrement"
                color="red"
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex          : 1,
        alignItems    : 'center',
        justifyContent: 'center'
    },
    greeting: {
        fontSize      : 20,
        fontWeight    : 'bold',
        margin        : 16
    }
});

export default Intro;