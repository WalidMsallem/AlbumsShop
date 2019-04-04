import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, artist, title, url } = album;
  const {
    image,
    imageStyle,
    thumnailStyle,
    headerTextStyle,
    headerContentStyle,
    thumnailContainerStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image style={thumnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ url: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifycontent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifycontent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
