import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

export default Card;

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,

    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
