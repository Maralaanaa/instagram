import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue1, setIsKeyboardVisible } from '../keyboard/store';
import { setInputValue2 } from '../keyboard/store';
import { setInputValue3 } from '../keyboard/store';

import { AppState } from '../keyboard/store';

import Header from '../components/Header';
import InstaStories from '../components/InstaStories';
import InstaPost from '../components/InstaPost';

const Home = () => {
  const [changeColor, setChangeColor] = useState(false);
  const inputValue =
    useSelector((state: AppState) => state.inputValue1) +
    useSelector((state: AppState) => state.inputValue2) +
    useSelector((state: AppState) => state.inputValue3);
  const isKeyboardVisible = useSelector(
    (state: AppState) => state.isKeyboardVisible,
  );
  const dispatch = useDispatch();

  const headerHandler = () => {
    setChangeColor(prevChangeColor => !prevChangeColor);
  };

  const handleTextInputPress = () => {
    dispatch(setIsKeyboardVisible(!isKeyboardVisible));
  };

  return (
    <SafeAreaView>
      <View style={styles.homeStyle}>
        <Header headerHandler={headerHandler} />
        <InstaStories changeColor={changeColor} />
        <TextInput
          style={{ backgroundColor: 'white', padding: 10 }}
          placeholder="type here ..."
          value={inputValue}
          onChangeText={value =>
            dispatch(setInputValue1(value)) &&
            dispatch(setInputValue2(value)) &&
            dispatch(setInputValue3(value))
          }
          onPressIn={handleTextInputPress}
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
