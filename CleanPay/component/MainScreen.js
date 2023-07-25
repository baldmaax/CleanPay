import React from 'react';
import { Text, View, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
    return {
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Event 화면</Text>
            <Button title="결제요청" onPress={() => {/* 결제요청 로직 구현 */}} />
            <Button title="결제하기" onPress={() => {/* 결제하기 로직 구현 */}} />
            <Button title="내 정보" onPress={() => {/* 내 정보 로직 구현 */}} />
      </View>
    }
}