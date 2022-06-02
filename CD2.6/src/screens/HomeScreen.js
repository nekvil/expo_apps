import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Pressable} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);  
  
  const [textInputPassword, setTextInputPassword] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');

  const checkTextInput = () => {
    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }
    alert('Success Signin');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.header}>SIGNIN</Text>
      </View>

      <View style={{flex: 4,  alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <TextInput style={styles.input}
          onChangeText={
            (value) => setTextInputEmail(value)
          }
          placeholder="Email"
          underlineColorAndroid={COLORS.white}
          selectionColor={COLORS.white}
          placeholderTextColor={"#E0E0E0"}
          maxLength={25}
          keyboardType="email-address"></TextInput>
        </View>
        <View style={{width: '90%', marginTop: 15}}>
          <TextInput style={styles.input}
          onChangeText={
            (value) => setTextInputPassword(value)
          }
          placeholder="Password"
          underlineColorAndroid={COLORS.white}
          selectionColor={COLORS.white}
          placeholderTextColor={"#E0E0E0"}
          maxLength={25}
          secureTextEntry={true}
          keyboardType="default"></TextInput>
        </View>
          <View style={{width: '90%', marginTop: 30}}>
                <View style={{height: 50}}>
                  <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={checkTextInput}
                          style={styles.btn}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                            }}>
                            SIGNIN
                          </Text>
                        </TouchableOpacity>
                </View>
        </View>
        <View style={{width: '90%', marginTop: 30, alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{ fontWeight: 'bold', color: COLORS.white,
          fontSize: 15}}>SIGNUP?</Text>
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

export default HomeScreen;
