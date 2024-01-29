import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/home";
import Review from "./screens/review";
import About from "./screens/about";
import { View, Text } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Function to log section visit
const logSectionVisit = async (sectionName) => {
  try {
    await analytics().logEvent("section_visit", {
      section: sectionName,
    });
  } catch (error) {
    console.log("Error logging section visit event:", error);
  }
};

// Custom stack screen component to wrap screens with section visit logging
const CustomStackScreen = ({ component: Component, name, ...rest }) => {
  useEffect(() => {
    // Log section visit when the screen mounts
    logSectionVisit(name);
  }, []);

  return <Component {...rest} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          options={({ route }) => ({
            title: getFocusedRouteNameFromRoute(route) ?? "Home",
          })}
        >
          {(props) => (
            <CustomStackScreen
              {...props}
              name="home"
              component={Home}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="review"
          options={({ route }) => ({
            title: getFocusedRouteNameFromRoute(route) ?? "Review",
          })}
        >
          {(props) => (
            <CustomStackScreen
              {...props}
              name="review"
              component={Review}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="about"
          options={({ route }) => ({
            title: getFocusedRouteNameFromRoute(route) ?? "About",
          })}
        >
          {(props) => (
            <CustomStackScreen
              {...props}
              name="about"
              component={About}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
