import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import ProfileScreen from './src/components/ProfileScreen';



const Stack = createStackNavigator();
 const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;