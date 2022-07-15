import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScr2 from '../screens/WelcomeScr2';
import CreateAccount from '../screens/CreateAccount';
import TabTop from './TabTop';
import ForgotPassword from '../components/ForgotPassword';
import CreatOtp from '../components/CreatOtp';
import Home from '../components/Home';
import BottomTabNav from './BottomTabNav';
import ChatMess from '../screens/ChatMess';

import SplashScreen from 'react-native-splash-screen';
import Calen from '../screens/Calen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomeScr2">
      <Stack.Screen
        options={{headerShown: false}}
        name="WelcomeScr2"
        component={WelcomeScr2}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateAccount"
        component={CreateAccount}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TabTop"
        component={TabTop}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreatOtp"
        component={CreatOtp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabNav"
        component={BottomTabNav}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name="ChatMess"
        component={ChatMess}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Calen"
        component={Calen}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
