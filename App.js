import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConfigPage from "./Components/ConfigPage";
import Button from "./Components/Button";

const Stack = createStackNavigator();

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

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
    <View style={styles.container}>
      <Text style={styles.intro}>
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

  const removeTask = (item) => {
    const index = tasks.indexOf(item);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const tasksList = tasks.map((task) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => removeTask(task)}>
        <Text>{task}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <ConfigPage
        text={text}
        setText={setText}
        addItem={() => addTask()}
        buttonLabel="Add Tasks"
        placeholder=" Type New Tasks"
      />
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

  const removeMember = (item) => {
    const index = members.indexOf(item);
    members.splice(index, 1);
    setMembers([...members]);
  };

  const membersList = members.map((member) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => removeMember()}>
        <Text>{member}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <ConfigPage
        text={text}
        setText={setText}
        addItem={() => addMember()}
        buttonLabel="Add Members"
        placeholder=" Type New Members"
      />
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
      <View style={styles.assign}>
        <Text style={styles.tasks}>{task}</Text>
        <Text>{members[Math.floor(Math.random() * members.length)]}</Text>
      </View>
    );
  });
  return <View>{list}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  intro: {
    fontSize: 20,
  },
  assign: {
    borderWidth: 1,
    padding: 10,
  },
  tasks: {
    fontWeight: "bold",
  },
});
