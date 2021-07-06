import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./Components/List";

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
        <Stack.Screen name="Select Tasks" component={SelectTasks} />
        <Stack.Screen name="Select Team Members" component={SelectMembers} />
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

const SelectTasks = ({ navigation, route }) => {
  var [tasks, setTasks] = React.useState([]);
  var [text, setText] = React.useState("");

  const addTask = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Type New Tasks"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => addTask()}>
        <Text style={styles.submitButtonText}> Add Task </Text>
      </TouchableOpacity>
      <View>
        <Text>Tasks</Text>
        <List list={tasks}></List>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate("Select Team Members")}
      ></Button>
    </View>
  );
};

const SelectMembers = ({ navigation, route }) => {
  var [members, setMembers] = React.useState([]);
  var [text, setText] = React.useState("");

  const addMember = () => {
    setMembers([...members, text]);
    setText("");
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Type New Members"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => addMember()}>
        <Text style={styles.submitButtonText}> Add Member </Text>
      </TouchableOpacity>
      <View>
        <Text>Members</Text>
        <List list={members}></List>
      </View>
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
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
});
