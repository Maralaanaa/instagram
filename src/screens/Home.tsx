/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Header from '../components/Header';
import InstaStories from '../components/InstaStories';
import InstaPost from '../components/InstaPost';

const Home = () => {
  const [changeColor, setChangeColor] = useState(false);
  const headerHandler = () => {
    setChangeColor(prevChangeColor => !prevChangeColor);
  };

  return (
    <SafeAreaView>
      <View style={styles.homeStyle}>
        <Header headerHandler={headerHandler} />
        <InstaStories changeColor={changeColor} />
        <TextInput
          style={{ backgroundColor: 'white', padding: 10 }}
          placeholder="Type here ...."
        />
        <InstaPost />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: 'black',
  },
});

export default Home;
