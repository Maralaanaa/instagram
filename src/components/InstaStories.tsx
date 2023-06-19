/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Str1 from '../assets/story.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const Stories = [
  {
    id: 1,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 2,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 3,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 4,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 5,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 6,
    Str: Str1,
    username: 'Julie',
  },
  {
    id: 7,
    Str: Str1,
    username: 'Julie',
  },
];
const Colors = {
  first: ['#FF0000', '#00FF00', '#4B0082', '#ffff'],
  second: ['#FFFF00', '#FF7F00', '#FF0000', '#4B0082'],
};
interface InstaStoriesProps {
  changeColor: boolean;
}
const InstaStories: React.FC<InstaStoriesProps> = ({ changeColor }) => {
  const [state, setState] = useState({
    activeStr: 4,
    imgHeight: 85,
    imgWidth: 85,
  });
  const [pressIndex, setPressIndex] = useState(0);
  const styles = getStyles(state.activeStr, state.imgHeight, state.imgWidth);
  const confirmHandler = (index: number) => {
    if (state.activeStr === 4) {
      setState({
        activeStr: 0,
        imgHeight: 88,
        imgWidth: 88,
      });
    } else {
      setState({
        activeStr: 4,
        imgHeight: 85,
        imgWidth: 85,
      });
    }
    setPressIndex(index);
  };
  return (
    <ScrollView horizontal contentContainerStyle={styles.headerBackground}>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        <View style={styles.stories}>
          <Image source={Str1} style={styles.yourStory} />
          <View style={styles.iconStyle}>
            <AntDesign name="pluscircle" size={20} color="#2A93D5" />
          </View>
          <Text style={[styles.usernameStyle, {}]}>Your Story</Text>
        </View>
        {Stories.map((item, index) => (
          <TouchableOpacity
            onPress={() => confirmHandler(index)}
            key={index.toString()}>
            <View style={styles.stories}>
              <LinearGradient
                style={[
                  styles.gradientStyle,
                  index === pressIndex ? styles.specialImageStyle : null,
                ]}
                colors={
                  index % 2 === 0 && changeColor ? Colors.first : Colors.second
                }>
                <Image source={item.Str} style={styles.imageStyle} />
              </LinearGradient>
              <Text maxFontSizeMultiplier={1} style={styles.usernameStyle}>
                {item.username}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const getStyles = (brdrWidth: number, imgHeight: number, imgWidth: number) =>
  StyleSheet.create({
    headerBackground: {
      backgroundColor: 'black',
      paddingHorizontal: 18,
      paddingVertical: 10,
      height: 150,
    },
    imageStyle: {
      height: 85,
      width: 85,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: 'black',
      alignSelf: 'center',
    },
    usernameStyle: {
      color: 'white',
      fontSize: 13,
      marginTop: 6,
    },
    stories: {
      alignItems: 'center',
      marginRight: 15,
    },
    yourStory: {
      height: 85,
      width: 85,
      borderRadius: 50,
      marginTop: 2,
    },
    iconStyle: {
      position: 'absolute',
      top: 60,
      left: 60,
      borderColor: 'black',
      backgroundColor: 'white',
      borderRadius: 50,
      borderWidth: 3,
    },
    gradientStyle: {
      height: 88,
      width: 88,
      borderRadius: 50,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    specialImageStyle: {
      height: imgHeight,
      width: imgWidth,
      borderRadius: 50,
      borderWidth: brdrWidth,
      borderColor: 'black',
      alignSelf: 'center',
    },
  });
export default InstaStories;
