import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

const ConfigPage = ({
  text,
  list,
  setText,
  addItem,
  placeholder,
  buttonLabel,
  listName,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor="#FECEAB"
          autoCapitalize="none"
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
          style={styles.textInput}
          color="#FECEAB"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => addItem()}>
        <Text style={styles.submitButtonText}> {buttonLabel} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#FECEAB",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "black",
  },
  container: {
    paddingTop: 23,
    width: deviceWidth,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#6C5B7B",
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    // backgroundColor: "white",
  },
});

export default ConfigPage;
