// PublicNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screen/Login';

const Stack = createStackNavigator();

const PublicNavigator = ({ onLogin }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        options={{ title: 'Login' }} // Optional: customize title
      >
        {(props) => <Login {...props} onLogin={onLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default PublicNavigator;
