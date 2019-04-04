import React from "react";
import { Text, View } from "react-native";
// import { BoxShadow } from "react-native-shadow";

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    borderColor: "red",

    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15
  }
};

export default Header;
