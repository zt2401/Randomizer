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

class MembersInput extends Component {
  state = {
    members: [],
    value: "",
  };

  onChangeValue = (inputText) => {
    this.setState({ value: inputText });
  };

  addMember = (member) => {
    this.setState({ members: [...this.state.members, this.state.value] });
    this.setState({ value: "" });
  };

  render() {
    const MembersList = this.state.members.map((member) => {
      return (
        <View>
          <Text>{member}</Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.value}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Add New Members"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.onChangeValue}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.addMember()}
        >
          <Text style={styles.submitButtonText}> Add Member </Text>
        </TouchableOpacity>
        <View>
          <Text>Members</Text>
          {MembersList}
        </View>
      </View>
    );
  }
}
export default MembersInput;

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
