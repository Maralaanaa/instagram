import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import InstaLogo from '../assets/logo.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface HeaderProps {
  headerHandler: () => void;
}
const Header = ({ headerHandler }: HeaderProps) => {
  return (
    <View style={styles.headerBackground}>
      <Image source={InstaLogo} style={styles.logoStyle} />
      <View style={styles.headerIcons}>
        <AntDesign
          name="hearto"
          size={25}
          color="white"
          style={styles.iconStyle}
        />
        <TouchableOpacity
          onPress={() => {
            headerHandler();
          }}>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    // left: 20,
    height: 50,
    width: 150,
  },
  headerBackground: {
    // position: 'relative',
    // top:50
    height: 60,
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconStyle: {
    paddingHorizontal: 20,
    marginTop: 1,
  },
});

export default Header;
