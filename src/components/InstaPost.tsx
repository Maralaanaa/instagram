import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Str1 from '../assets/story.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Posts = [
  {
    id: 1,
    Str: Str1,
    username: 'Julie',
    likes: '13.393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 2,
    Str: Str1,
    username: 'Julie',
    likes: '13.393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 3,
    Str: Str1,
    username: 'Julie',
    likes: '13.393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 4,
    Str: Str1,
    username: 'Julie',
    likes: '13.393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 5,
    Str: Str1,
    username: 'Julie',
    likes: '13.393',
    comments: '433',
    date: '1 week ago',
  },
];

const InstaPost = () => {
  return (
    <ScrollView>
      {Posts.map(item => (
        <View style={styles.postBackground}>
          <View style={styles.postHeader}>
            <View style={styles.postTitle}>
              <Image source={item.Str} style={styles.imageStyle} />
              <Text style={styles.usernameStyle}>{item.username}</Text>
            </View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color={'white'}
              style={styles.dotIcon}
            />
          </View>
          <Image source={item.Str} style={styles.postImage} />
          <View style={styles.postFooter}>
            <View style={styles.postFooterIcons}>
              <View style={styles.postFooterActions}>
                <AntDesign
                  name="hearto"
                  size={25}
                  color={'white'}
                  style={styles.iconStyle}
                />
                <Feather
                  name="message-circle"
                  size={25}
                  color={'white'}
                  style={styles.commentIcon}
                />
                <Feather name="send" size={25} color={'white'} />
              </View>
              <FontAwesome name="bookmark-o" size={25} color={'white'} />
            </View>
            <Text style={styles.likeStyles}>{item.likes} likes</Text>
            <Text style={styles.captionSection}>
              <Text style={styles.captionUserStyle}>{item.username}</Text>
              <Text style={styles.caption}> it's beautiful days</Text>
            </Text>
            <Text style={styles.viewComments}>
              View all {item.comments} comments
            </Text>
            <Text style={styles.postDate}>{item.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postBackground: {
    // top: 50,
    backgroundColor: 'black',
    paddingBottom: 15,
  },
  imageStyle: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  usernameStyle: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
  postTitle: {
    flexDirection: 'row',
    // paddingHorizontal: 18,
    alignItems: 'center',
  },
  postHeader: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  postImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
  },
  postFooterActions: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 18,
    marginTop: 1,
  },
  commentIcon: {
    marginLeft: 5,
    marginRight: 20,
  },
  postFooterIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeStyles: {
    color: 'white',
    marginTop: 8,
    fontSize: 13,
  },
  captionSection: {
    marginTop: 5,
  },
  captionUserStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
  },
  caption: {
    color: 'white',
    fontSize: 13,
  },
  postFooter: {
    paddingHorizontal: 18,
  },
  viewComments: {
    color: 'grey',
    fontSize: 12,
    marginTop: 5,
  },
  postDate: {
    color: 'grey',
    fontSize: 12,
    marginTop: 3,
  },
  // scrollStyle: {
  //     top:50,
  // }
  dotIcon: {
    transform: [{ rotate: '90 deg' }],
  },
});

export default InstaPost;
