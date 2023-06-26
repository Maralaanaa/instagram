// import React, { useState } from 'react';
// import { Button, StatusBar, StyleSheet, View } from 'react-native';
// import BottomTab from './src/navigation/BottomTab';
// import MongolianKeyboard from './src/keyboard/MongolianKeyboard';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [isNumeric, setIsNumeric] = useState(false);
//   const [isKeyboardVisible] = useState(false);
//   const handlePressKey = (key: string) => {
//     if (isNumeric) {
//       if (inputValue.length < 10) {
//         setInputValue(prevInputValue => prevInputValue + key);
//       }
//     } else {
//       if (inputValue.length < 2) {
//         setInputValue(prevInputValue => prevInputValue + key);
//       }
//     }
//   };

//   const handleDeleteOne = () => {
//     setInputValue(prevInputValue => prevInputValue.slice(0, -1));
//   };

//   const handleToggleKeyboard = () => {
//     setIsNumeric(prevIsNumeric => !prevIsNumeric);
//   };
//   return (
//     <>
//       <StatusBar backgroundColor="black" />
//       <BottomTab />
//       {isKeyboardVisible && (
//         <>
//           <MongolianKeyboard
//             onPressKey={handlePressKey}
//             isNumeric={isNumeric}
//           />
//           <View style={styles.buttonContainer}>
//             <Button
//               title={isNumeric ? 'Letters' : 'Numbers'}
//               onPress={handleToggleKeyboard}
//               color={'white'}
//             />
//             <Button title="Remove" onPress={handleDeleteOne} color={'white'} />
//           </View>
//         </>
//       )}
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },
// });
// export default App;

import React from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, setIsNumeric } from './src/keyboard/store';
import { AppState } from './src/keyboard/store';

import BottomTab from './src/navigation/BottomTab';
import MongolianKeyboard from './src/keyboard/MongolianKeyboard';

const App = () => {
  const inputValue = useSelector((state: AppState) => state.inputValue);
  const isNumeric = useSelector((state: AppState) => state.isNumeric);
  const isKeyboardVisible = useSelector(
    (state: AppState) => state.isKeyboardVisible,
  );
  const dispatch = useDispatch();

  const handlePressKey = (key: string) => {
    if (isNumeric) {
      if (inputValue.length < 10) {
        dispatch(setInputValue(inputValue + key));
      }
    } else {
      if (inputValue.length < 2) {
        dispatch(setInputValue(inputValue + key));
      }
    }
  };

  const handleDeleteOne = () => {
    dispatch(setInputValue(inputValue.slice(0, -1)));
  };

  // const handleToggleKeyboard = () => {
  //   dispatch(setIsNumeric(!isNumeric));
  //   dispatch(setIsKeyboardVisible(!isKeyboardVisible));
  // };
  const handleToggleKeyboard = () => {
    if (isNumeric) {
      dispatch(setIsNumeric(false));
    } else {
      dispatch(setIsNumeric(true));
    }
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      <BottomTab />
      {isKeyboardVisible && (
        <>
          <MongolianKeyboard
            onPressKey={handlePressKey}
            isNumeric={isNumeric}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={isNumeric ? 'Letters' : 'Numbers'}
              onPress={handleToggleKeyboard}
              color={'white'}
            />
            <Button title="Remove" onPress={handleDeleteOne} color={'white'} />
          </View>
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
    // marginVertical: 10,
    paddingBottom: 20,
  },
});

export default App;
