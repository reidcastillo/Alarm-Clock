import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Setting from './screens/Setting';
import AlarmFeatures from './screens/AlarmFeatures';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="./screens/Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AlarmFeatures" component={AlarmFeatures} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
