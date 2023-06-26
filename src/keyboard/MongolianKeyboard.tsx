import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import lettersData from './data/letters.json';
import numbersData from './data/numbers.json';

interface MongolianKeyboardProps {
  onPressKey: (key: string) => void;
  isNumeric: boolean;
}
const width = Dimensions.get('window').width;
const MongolianKeyboard = ({
  onPressKey,
  isNumeric,
}: MongolianKeyboardProps) => {
  const keyboardLayout = isNumeric ? numbersData.rows : lettersData.rows;

  return (
    <View style={[styles.keyboardContainer]}>
      {keyboardLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={keyIndex}
              style={styles.key}
              onPress={() => onPressKey(key)}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    // top: 10,
    backgroundColor: 'black',
    // borderRadius: 8,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  key: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    width: width,
    backgroundColor: '#f0f0f0',
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MongolianKeyboard;
