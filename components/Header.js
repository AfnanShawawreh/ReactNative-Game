import React from "react";
import { View,StyleSheet } from "react-native";
import TitleText from './TitleText'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    padding: 0,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent:"flex-end",
  },
 
});
export default Header;
