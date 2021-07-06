import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TasksInput from "./Components/TasksInput";
import MembersInput from "./Components/MembersInput";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Randomizer" }}
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
        title="Start Randomizing"
        onPress={() => navigation.navigate("Select Tasks")}
      />
    </View>
  );
};

const ConfigScreen1 = ({ navigation, route }) => {
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");

  return (
    <View>
      <TasksInput placeholder="task 1"></TasksInput>
      <Button
        title="Next"
        onPress={() => navigation.navigate("Select Team Members")}
      ></Button>
    </View>
  );
};

const ConfigScreen2 = ({ navigation, route }) => {
  return (
    <View>
      <MembersInput />
      <Button
        title="Randomize"
        onPress={() => navigation.navigate("Randomize")}
      ></Button>
    </View>
  );
};

const Randomize = ({ navigation, route }) => {
  return <View></View>;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
