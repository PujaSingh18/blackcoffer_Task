// AppNavigator.js
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Easing, Platform, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import AlertScreen from '../screen/AlertScreen';
import DraftScreen from '../screen/DraftScreen';
import EditScreen from '../screen/EditScreen';
import HistroyScreen from '../screen/HistroyScreen';
import Home from '../screen/Home';
import LocalScreen from '../screen/LocalScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SerachScreen from '../screen/SerachScreen';
import ScreenConstants from './ScreenConstants';
import { TapAppNavigator } from './TapAppNavigator';

enableScreens();

const Stack = createStackNavigator();

const AppNavigator = () => {
  const config = {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.linear,
    },
  };

  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitleAlign: Platform.OS === 'android' ? 'left' : 'center',
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: '#004B49',
        },
      }}
    >
      <Stack.Screen
        name={ScreenConstants.USER_SCREEN}
        component={TapAppNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenConstants.HOME}
        component={Home}
        options={{
          headerShown: false,
          title: 'Home_Screen'
        }}
      />
      <Stack.Screen
        name={ScreenConstants.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: 'Profile'
        }}
      />
      <Stack.Screen
        name={ScreenConstants.LOCAL}
        component={LocalScreen}
        options={{
          headerShown: true,
          title: 'Local'
        }}
      />
      <Stack.Screen
        name={ScreenConstants.ALERT}
        component={AlertScreen}
        options={{
          headerShown: true,
          title: 'Alert'
        }}
      />
      <Stack.Screen
        name={ScreenConstants.EDIT}
        component={EditScreen}
        options={{
          headerShown: true,
          title: 'Edit',
          headerTitleStyle: {
            color: 'white',
            // fontFamily: fonts?.PoppinsSemiBold,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenConstants.DRAFT}
        component={DraftScreen}
        options={{
          headerShown: true,
          title: 'Draft',
          headerTitleStyle: {
            color: 'white',
            // fontFamily: fonts?.PoppinsSemiBold,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenConstants.SERACH}
        component={SerachScreen}
        options={{
          headerShown: true,
          title: 'BWStory',
          headerTitleStyle: {
            color: 'white',
            // fontFamily: fonts?.PoppinsSemiBold,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={ScreenConstants.HISTROY}
        component={HistroyScreen}
        options={{
          headerShown: true,
          title: 'Histroy',
          headerTitleStyle: {
            color: 'white',
            // fontFamily: fonts?.PoppinsSemiBold,
          },
          headerRight: () => (
            <>
              <View style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "#66bbf4" }}>Clear all</Text>
              </View>
            </>
          ),
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
