import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "./Components/Input";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Select Tasks" component={ConfigScreen1} />
        <Stack.Screen name="Select Team Members" component={ConfigScreen2} />
        <Stack.Screen name="Randomize" component={Randomize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Application"
        onPress={() => navigation.navigate("Select Tasks")}
      />
    </View>
  );
};

const ConfigScreen1 = ({ navigation, route }) => {
  return (
    <View>
      <Input placeholder="task 1"></Input>
      <Input placeholder="task 2"></Input>
      <Input placeholder="task 3"></Input>
      <Button
        title="Next Page"
        onPress={() => navigation.navigate("Select Team Members")}
      ></Button>
    </View>
  );
};

const ConfigScreen2 = ({ navigation, route }) => {
  return (
    <View>
      <Input placeholder="Team Member 1"></Input>
      <Input placeholder="Team Member 2"></Input>
      <Input placeholder="Team Member 3"></Input>
      <Button
        title="Next Page"
        onPress={() => navigation.navigate("Randomize")}
      ></Button>
    </View>
  );
};

const Randomize = ({ navigation, route }) => {
  return (
    <View>
      <Input placeholder="Team Member 1"></Input>
      <Input placeholder="Team Member 2"></Input>
      <Input placeholder="Team Member 3"></Input>
      <Button
        title="Randomize"
        onPress={() => navigation.navigate("Randomize")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
