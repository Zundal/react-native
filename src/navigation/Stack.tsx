import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createNativeStackNavigator();

const Center: React.FC = ({ children }) => { //컴포넌트를 가운데 정렬해줍니다.
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {children}
        </View>
    )
}

const Routes: React.FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

function Home() {
    return(
        <View>
            <Text>
                Home    
            </Text>
        </View>
    )
}

function About() {
    return(
        <View>
            <Text>
                About 
            </Text>
        </View>
    )
}

export default Routes;