import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }
  renderAlbums() {
    return this.state.albums.map((album, i) => (
      <AlbumDetail key={i} album={album} />
    ));
  }
  render() {
    console.log(this.state, "sss");
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
