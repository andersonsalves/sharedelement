
import 'react-native-gesture-handler';

import React from 'react';


import { enableScreens } from 'react-native-screens';

import { NavigationContainer } from '@react-navigation/native';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


import Home from './screens/Home';

import DetailScreen from './screens/DetailScreen';



enableScreens();

const Stack = createSharedElementStackNavigator();



export default function RootNavigator() {

    return (

        <NavigationContainer>

            <Stack.Navigator
                initialRouteName='Home'

                screenOptions={

                    {
                        headerShown: false
                    }
                }>

                <Stack.Screen
                    name='Home'
                    component={Home} />

                <Stack.Screen
                    name='DetailScreen'
                    component={DetailScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}