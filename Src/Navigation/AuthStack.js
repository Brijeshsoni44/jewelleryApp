
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavgiationStrings from '../Constants/NavigationString';
import {
    Login,
    Register,
    SplashScreen,
    ForgotPassword,
    OtpVerification,

} from '../Screens';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavgiationStrings.LOGIN} component={Login} />
            <Stack.Screen name={NavgiationStrings.REGISTER} component={Register} />
            <Stack.Screen name={NavgiationStrings.OTP_VEROFOCATION} component={OtpVerification} />
            <Stack.Screen name={NavgiationStrings.SPLASH_SCREEN} component={SplashScreen} />
            <Stack.Screen name={NavgiationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
        </Stack.Navigator>

    )
}