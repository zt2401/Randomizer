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

const Stack = createStackNavigator();

export default function App() {
  var [tasks, setTasks] = React.useState([]);
  var [members, setMembers] = React.useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Randomizer" }}
        />
        <Stack.Screen name="Select Tasks">
          {(props) => (
            <SelectTasks {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Select Team Members">
          {(props) => (
            <SelectMembers
              {...props}
              members={members}
              setMembers={setMembers}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Randomize">
          {(props) => <Randomize {...props} tasks={tasks} members={members} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Sharing responsibility by rotating tasks gives team members practice and
        creates a stronger team. This app helps teams rotate tasks randomly
        without the hassle of asking each other whose turn it is.
      </Text>
      <Button
        title="Start Randomizing"
        onPress={() => navigation.navigate("Select Tasks")}
      />
    </View>
  );
};

const SelectTasks = ({ navigation, route, tasks, setTasks }) => {
  var [text, setText] = React.useState("");

  const addTask = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const tasksList = tasks.map((task) => {
    return (
      <View>
        <Text>-{task}</Text>
      </View>
    );
  });

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
        {tasksList}
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate("Select Team Members")}
      ></Button>
    </View>
  );
};

const SelectMembers = ({ navigation, route, members, setMembers }) => {
  var [text, setText] = React.useState("");

  const addMember = () => {
    setMembers([...members, text]);
    setText("");
  };

  const membersList = members.map((member) => {
    return (
      <View>
        <Text>-{member}</Text>
      </View>
    );
  });

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
        {membersList}
      </View>
      <Button
        title="Randomize"
        onPress={() => navigation.navigate("Randomize")}
      ></Button>
    </View>
  );
};

const Randomize = ({ navigation, route, tasks, members }) => {
  const list = tasks.map((task) => {
    return (
      <View>
        <Text>-{task}-</Text>
        <Text>{members[Math.floor(Math.random() * members.length)]}</Text>
      </View>
    );
  });
  return <View>{list}</View>;
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
