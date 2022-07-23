import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Button = ({color = colors.button.primary.background, text, isLink}) => {
  if (isLink) {
    return <Text style={styles.textLink}>{text}</Text>;
  }
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.button.primary.text,
  },
  textLink: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.button.primary.background,
  },
});
