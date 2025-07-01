import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { Alert_Icon, Discover_Icon, Local_Icon, Profile_Icon, Vector1_Icon, Vector2_Icon, Vector3_Icon, Vector4_Icon } from '../res/Icons';
import { height, width } from '../res/String';
import AlertScreen from '../screen/AlertScreen';
import Home from '../screen/Home';
import LocalScreen from '../screen/LocalScreen';
import ProfileScreen from '../screen/ProfileScreen';
import ScreenConstants from './ScreenConstants';

const Tab = createBottomTabNavigator();

export const TapAppNavigator = () => {
    const [homeTitle, setHomeTitle] = useState(false);
    const [localTitle, setLocalTitle] = useState(false);
    const [alertTitle, setAlertTitle] = useState(false);
    const [profileTitle, setProfileTitle] = useState(false);

    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ScreenConstants.HOME}
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#004B49' : '#888', fontSize: 10 }}>
                            Discover
                        </Text>
                    ),
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Vector1_Icon height={height / 33} width={width / 18} />
                        ) : (
                            <Discover_Icon height={height / 30} width={width / 15} />
                        )
                    ),
                }}
                listeners={{
                    focus: () => setHomeTitle(true),
                    blur: () => setHomeTitle(false),
                }}
            />
            <Tab.Screen
                name={ScreenConstants.LOCAL}
                component={LocalScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#004B49' : '#888', fontSize: 10 }}>
                            Local
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Vector2_Icon height={height / 30} width={width / 15} />
                        ) : (
                            <Local_Icon height={height / 30} width={width / 15} />
                        )
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: '#004B49',
                    },
                }}
                listeners={{
                    focus: () => setLocalTitle(true),
                    blur: () => setLocalTitle(false),
                }}
            />
            <Tab.Screen
                name={ScreenConstants.ALERT}
                component={AlertScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#004B49' : '#888', fontSize: 10 }}>
                            Alert
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Vector3_Icon height={height / 30} width={width / 15} />
                        ) : (
                            <Alert_Icon height={height / 30} width={width / 15} />
                        )
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: '#004B49',
                    },
                }}
                listeners={{
                    focus: () => setAlertTitle(true),
                    blur: () => setAlertTitle(false)
                }}
            />
            <Tab.Screen
                name={ScreenConstants.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#004B49' : '#888', fontSize: 10 }}>
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                            <Vector4_Icon height={height / 30} width={width / 15} />
                        ) : (
                            <Profile_Icon height={height / 30} width={width / 15} />
                        )
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerStyle: {
                        backgroundColor: '#004B49',
                    },
                }}
                listeners={{
                    focus: () => setProfileTitle(true),
                    blur: () => setProfileTitle(false)
                }}
            />
        </Tab.Navigator>
    );
};
