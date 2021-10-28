import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Stack from '../navigation/Stack';

function Intro() {
    return (
    <SafeAreaView>
        <Text>test</Text>
        <Stack/>
        <Text>test</Text>
        <View>
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
    </SafeAreaView>
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