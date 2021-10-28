import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'

// organisms
import Home from '../components/organisms/Home';
import About from '../components/organisms/About';

const Stack = createNativeStackNavigator();

// const Center: React.FC = ({ children }) => { //컴포넌트를 가운데 정렬해줍니다.
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             {children}
//         </View>
//     )
// }

const Stacks : React.FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home"   component={Home} />
                    <Stack.Screen name="About"  component={About} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default Stacks;