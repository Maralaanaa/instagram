import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import lettersData from './data/letters.json';
import numbersData from './data/numbers.json';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue1, setIsKeyboardVisible } from './store'; // Replace 'path/to/store' with the actual path to your store file
import { setInputValue2 } from './store';
import { setInputValue3 } from './store';
import { AppState } from './store'; // Replace 'path/to/store' with the actual path to your store file

const width = Dimensions.get('window').width;

const MongolianKeyboard = () => {
  const dispatch = useDispatch();
  const inputValue3 = useSelector((state: AppState) => state.inputValue3);
  const inputValue =
    useSelector((state: AppState) => state.inputValue1) +
    useSelector((state: AppState) => state.inputValue2) +
    inputValue3;
  const [selectedKeyScrollView1, setSelectedKeyScrollView1] = useState<
    string | null
  >(null);
  const [selectedKeyScrollView2, setSelectedKeyScrollView2] = useState<
    string | null
  >(null);

  const handleKeyPress = (key: string, scrollViewIndex: number) => {
    if (scrollViewIndex === 1) {
      setSelectedKeyScrollView1(key);
      dispatch(setInputValue1(key));
    } else if (scrollViewIndex === 2) {
      setSelectedKeyScrollView2(key);
      dispatch(setInputValue2(key));
    } else if (inputValue.length < 10) {
      if (key === 'x') {
        dispatch(setInputValue3(inputValue3.slice(0, -1)));
      } else if (key === 'save') {
        if (inputValue3.length < 8) {
          Alert.alert('Регистрээ бүрэн оруулна уу');
        } else {
          dispatch(setIsKeyboardVisible(false));
        }
      } else {
        dispatch(setInputValue3(inputValue3 + key));
      }
    }
  };

  const isKeySelectedScrollView1 = (key: string) =>
    selectedKeyScrollView1 === key;
  const isKeySelectedScrollView2 = (key: string) =>
    selectedKeyScrollView2 === key;

  return (
    <View style={styles.keyboardContainer}>
      <ScrollView style={styles.scrollView}>
        {lettersData.rows.map((letter, letterIndex) => (
          <View key={letterIndex} style={styles.column}>
            {letter.map((key, keyIndex) => (
              <TouchableOpacity
                key={keyIndex}
                style={[
                  styles.key,
                  isKeySelectedScrollView1(key) &&
                    styles.selectedKeyScrollView1,
                ]}
                onPress={() => handleKeyPress(key, 1)}>
                <Text
                  style={[
                    styles.keyText,
                    isKeySelectedScrollView1(key) &&
                      styles.selectedKeyTextScrollView1,
                  ]}>
                  {key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        {lettersData.rows.map((letter, letterIndex) => (
          <View key={letterIndex} style={styles.column}>
            {letter.map((key, keyIndex) => (
              <TouchableOpacity
                key={keyIndex}
                style={[
                  styles.key,
                  isKeySelectedScrollView2(key) &&
                    styles.selectedKeyScrollView2,
                ]}
                onPress={() => handleKeyPress(key, 2)}>
                <Text
                  style={[
                    styles.keyText,
                    isKeySelectedScrollView2(key) &&
                      styles.selectedKeyTextScrollView2,
                  ]}>
                  {key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.numbersStyle}>
        {numbersData.rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key, keyIndex) => (
              <TouchableOpacity
                key={keyIndex}
                style={styles.key}
                onPress={() => handleKeyPress(key, 0)}>
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  keyboardContainer: {
    backgroundColor: 'black',
    padding: 10,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  column: {
    marginBottom: 8,
  },
  key: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  selectedKeyScrollView1: {
    backgroundColor: 'grey',
  },
  selectedKeyScrollView2: {
    backgroundColor: 'grey',
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedKeyTextScrollView1: {
    color: 'white',
  },
  selectedKeyTextScrollView2: {
    color: 'white',
  },
  scroll: {
    flexDirection: 'row',
  },
  scrollView: {
    height: 185,
    width: 50,
    marginRight: 8,
  },
  numbersStyle: {
    width: 300,
  },
});
export default MongolianKeyboard;
