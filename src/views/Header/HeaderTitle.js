import React from 'react';
import { Text, View, Platform, StyleSheet, Animated } from 'react-native';

const AnimatedText = Animated.Text;

const HeaderTitle = ({ style, ...rest }) => (
  <AnimatedText
    numberOfLines={1}
    {...rest}
    style={[styles.title, style]}
    accessibilityTraits="header"
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 27,
    fontWeight: Platform.OS === 'ios' ? '300' : '300',
    color: 'rgba(0, 0, 0, .9)',
    marginHorizontal: 16,
  },
});

export default HeaderTitle;
