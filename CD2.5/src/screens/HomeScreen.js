import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableOpacity, ToastAndroid, StatusBar} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{flex: 7, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: COLORS.white}}>HomeScreen</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '90%'}}>
            <View style={{height: 50}}>
              <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={showToastWithGravity}
                      style={styles.btn}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                        }}>
                        PUSH ME
                      </Text>
                    </TouchableOpacity>
              </View>
        </View>
      </View>
        
      <StatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

const COLORS = {primary: '#282534', white: '#fff'};

const showToastWithGravity = () => {
  ToastAndroid.showWithGravity(
    "And then just touch me!",
    ToastAndroid.LONG,
    ToastAndroid.CENTER
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
