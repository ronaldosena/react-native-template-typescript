import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "~/Routes";
// import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
