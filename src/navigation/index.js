import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Album from "../components/Album";
import SharedAlbum from "../components/SharedAlbum";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={Album} />
      <Stack.Screen name="Shared Album" component={SharedAlbum} />
    </Stack.Navigator>
  );
};

export default Navigator;
