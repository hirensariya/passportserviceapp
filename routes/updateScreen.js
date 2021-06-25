/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useDarkMode} from 'react-native-dark-mode';
import home from '../screen/home';
import decoument from '../screen/decument';
import newapp from '../screen/newapp';
import fee from '../screen/fee';
import faq from '../screen/faq';
import constact from '../screen/constact';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function MyStack() {
    const isDarkMode = useDarkMode();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#676e75':'white',
        },
        headerTintColor: isDarkMode ? '#fff':'black',
      }}>
      <Stack.Screen
        name="Home"
              component={home}
              options={{
          title: 'Welcome To PassportService',
        }}
      />
      <Stack.Screen
        name="Application"
        component={newapp}
        options={{
          title: 'New Applicatin',
        }}
      />
      <Stack.Screen
        name="Decoument"
        component={decoument}
        options={{
          title: 'Required Document',
        }}
      />
      <Stack.Screen
        name="Constact"
        component={constact}
        options={{
          title: 'Contact Us',
        }}
      />
      <Stack.Screen
        name="Fee"
        component={fee}
        options={{
          title: 'Fee Calculation',
        }}
      />
      <Stack.Screen
        name="Faq"
        component={faq}
        options={{
          title: 'FAQ',
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
