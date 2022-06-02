import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Pressable} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SecondScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.header}>Hi, {route.params.paramKey}</Text>
      </View>

      <View style={{flex: 4,  alignItems: 'center'}}>
        <View style={{width: '90%', marginTop: 30, alignItems: 'center'}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ fontWeight: 'bold', color: COLORS.white,
          fontSize: 15}}>maybe back?</Text>
          </Pressable>
        </View>

      </View> 
        
      <StatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

const COLORS = {primary: '#242424', white: '#fff'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  header: {
    color: COLORS.white,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 5,
    height: 50,
    borderWidth: 0,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  btn: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondScreen;
