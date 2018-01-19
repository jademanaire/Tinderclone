import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { size } from '../helpers/devices';

export default class NoMoreCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}} 
          style={styles.user_pic_style}
        />
        <Text style={styles.empty_state_text_style}>Yakınlarınızda yeni biri yok.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_pic_style: {
    width: size(75),
    height: size(75),
    borderRadius: size(150) / 2,
    resizeMode: 'contain',
    marginBottom: size(30),
  },
  empty_state_text_style: {
    fontSize: size(18),
    fontWeight: '500',
    color: 'gray',
  }
});