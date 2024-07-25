import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import AddScan from './screens/AddScan';
import ScanResults from './screens/ScanResults';
import List from './screens/List';
import QRCodeDetail from './screens/QRCodeDetail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'TORIO NY VAOVAO TSARA' }} />
                <Stack.Screen name="Scanner" component={Scanner} />
                <Stack.Screen name="AddScan" component={AddScan} />
                <Stack.Screen name="ScanResults" component={ScanResults} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="QRCodeDetail" component={QRCodeDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
