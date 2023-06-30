import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from './src/keyboard/store';

import BottomTab from './src/navigation/BottomTab';
import MongolianKeyboard from './src/keyboard/MongolianKeyboard';

const App = () => {
  const isKeyboardVisible = useSelector(
    (state: AppState) => state.isKeyboardVisible,
  );

  return (
    <>
      <StatusBar backgroundColor="black" />
      <BottomTab />
      {isKeyboardVisible && (
        <>
          <MongolianKeyboard />
          <View style={styles.buttonContainer} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});

export default App;
