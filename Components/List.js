import React from "react";
import { Text, View } from "react-native";

export default function List({ list }) {
  return (
    <View>
      {list.map((item) => {
        return (
          <View>
            <Text>-{item}</Text>
          </View>
        );
      })}
    </View>
  );
}
