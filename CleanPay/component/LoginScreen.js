import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('Home')} 
      />
      <Button
        title="Kakao로 로그인"
        onPress={() => {
          // TODO: Implement Kakao login
        }}
      />
      <Button
        title="회원가입"
        type="outline"
        onPress={() => {
          // TODO: Implement sign up
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoginScreen;
