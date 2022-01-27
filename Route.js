import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Splash from "./Splash";
import Register from "./Register";
import SignIn from "./SignIn";
import DashBoard from "./BottomNavigation/DashBoard";
import PlayScreen from "./PlayScreen";


const Stack = createNativeStackNavigator();

const Route = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                <Stack.Screen name="PlayScreen" component={PlayScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Route;
