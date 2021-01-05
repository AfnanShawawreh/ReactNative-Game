import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
  button: {
   backgroundColor:'red',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
});
export default MainButton;
