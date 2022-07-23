import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
      <Text style={styles.title}>New Experience</Text>
      <Text style={styles.subTitle}>
        Watch a new movie much easier than any before
      </Text>
      <View style={styles.buttonWrapper}>
        <Button text="Get Started" />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>Already have an account? </Text>
        <Button text="Sign In" isLink />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 55,
  },
  logo: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    marginTop: 70,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    maxWidth: 200,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 70,
    marginBottom: 20,
  },
  infoWrapper: {
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fonts.primary[400],
  },
});
