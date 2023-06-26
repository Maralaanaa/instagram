// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
// import Header from '../components/Header';
// import InstaStories from '../components/InstaStories';
// import InstaPost from '../components/InstaPost';

// const Home = () => {
//   const [changeColor, setChangeColor] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [, setKeyboardVisible] = useState(false);

//   const headerHandler = () => {
//     setChangeColor(prevChangeColor => !prevChangeColor);
//   };

//   const handleTextInputPress = () => {
//     setKeyboardVisible(prevKeyboardVisible => !prevKeyboardVisible);
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.homeStyle}>
//         <Header headerHandler={headerHandler} />
//         <InstaStories changeColor={changeColor} />
//         <TextInput
//           style={{ backgroundColor: 'white', padding: 10 }}
//           value={inputValue}
//           onChangeText={setInputValue}
//           onPressIn={handleTextInputPress}
//         />
//         <InstaPost />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   homeStyle: {
//     backgroundColor: 'black',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },
// });

// export default Home;

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, setIsKeyboardVisible } from '../keyboard/store';
import { AppState } from '../keyboard/store';

import Header from '../components/Header';
import InstaStories from '../components/InstaStories';
import InstaPost from '../components/InstaPost';

const Home = () => {
  const [changeColor, setChangeColor] = useState(false);
  const inputValue = useSelector((state: AppState) => state.inputValue);
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
          value={inputValue}
          onChangeText={value => dispatch(setInputValue(value))}
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
