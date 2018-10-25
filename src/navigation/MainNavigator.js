import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../pages/HomeScreen";
import TabBarIcon from "../components/TabBarIcon";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default HomeStack;