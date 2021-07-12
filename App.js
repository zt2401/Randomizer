import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
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
          // options={{ title: "Randomizer" }}
          options={{
            title: "Randomizer",
            headerStyle: {
              backgroundColor: "#363636",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Select Tasks"
          options={{
            headerStyle: {
              backgroundColor: "#363636",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {(props) => (
            <SelectTasks {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Select Team Members"
          options={{
            headerStyle: {
              backgroundColor: "#363636",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {(props) => (
            <SelectMembers
              {...props}
              members={members}
              setMembers={setMembers}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Randomize"
          options={{
            headerStyle: {
              backgroundColor: "#363636",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {(props) => <Randomize {...props} tasks={tasks} members={members} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.dice} source={require("./Components/dice.png")} />
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
      <View style={styles.list}>
        <Text style={{ fontSize: 40 }}>Tasks</Text>
        {tasksList}
      </View>
      <View style={styles.config}>
        <ConfigPage
          text={text}
          setText={setText}
          addItem={() => addTask()}
          buttonLabel="Add Tasks"
          placeholder=" Type New Tasks"
        />
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
      <TouchableOpacity
        style={styles.card}
        onPress={() => removeMember(member)}
      >
        <Text>{member}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={{ fontSize: 40 }}>Members</Text>
        {membersList}
      </View>
      <View style={styles.config}>
        <ConfigPage
          text={text}
          setText={setText}
          addItem={() => addMember()}
          buttonLabel="Add Members"
          placeholder=" Type New Members"
        />
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
        <View style={styles.assign}>
          <Text style={styles.tasks}>{task}</Text>
          <Text>{members[Math.floor(Math.random() * members.length)]}</Text>
        </View>
      </View>
    );
  });
  return <View style={styles.rand}>{list}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    width: deviceWidth / 2,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#A8A7A7",
  },
  intro: {
    fontSize: 20,
    backgroundColor: "#A8A7A7",
    borderRadius: 20,
    padding: 10,
  },
  assign: {
    borderWidth: 1,
    padding: 10,
    width: deviceWidth / 2,
    borderWidth: 1,
    borderRadius: 10,
    width: deviceWidth / 2,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#A8A7A7",
  },
  tasks: {
    fontWeight: "bold",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  config: {
    marginTop: 400,
  },
  rand: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363636",
  },
  dice: {
    height: 150,
    width: 150,
    position: "absolute",
    bottom: 700,
  },
});
