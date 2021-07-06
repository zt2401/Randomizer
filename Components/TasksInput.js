import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Flatlist,
} from "react-native";

class TasksInput extends Component {
  state = {
    tasks: [],
    value: "",
  };

  onChangeValue = (inputText) => {
    this.setState({ value: inputText });
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, this.state.value] });
    this.setState({ value: "" });
  };

  render() {
    const TasksList = this.state.tasks.map((task) => {
      return (
        <View>
          <Text>{task}</Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.value}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Add New Task"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.onChangeValue}
          clearButtonMode="always"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.addTask()}
        >
          <Text style={styles.submitButtonText}> Add Task </Text>
        </TouchableOpacity>
        <View>
          <Text>Tasks</Text>
          {TasksList}
        </View>
      </View>
    );
  }
}
export default TasksInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
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
});
