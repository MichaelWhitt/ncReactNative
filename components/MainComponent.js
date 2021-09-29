import React, {Component} from "react";
import Directory from './DirectoryComponent';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";
import Constants from "expo-constants";
//Platform import can be used to get the device OS

//createStackNavigator takes one mandatory argument called the "Route configs" object
//this is where you set which components will be available in the stack
const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    }, 
    { //a second, optional arg is initial route name which defaults the user to whichever component you want
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

//createAppContainer returns a react component that handles connecting top level navigator to the react native nav env
//always wrap top-level nav for the app with createAppContainer, like this:
const AppNavigator = createAppContainer(DirectoryNavigator);
//DirectoryNavigator contains screens for both directory and campsite info components

// Conditional code in View style below, check if ios OS, padding 0, else, constants.statusbarheight etc
class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator /> 
            </View>
        );
    }
}

export default Main;