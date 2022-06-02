import React, {useState} from 'react';
import {Modal, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Pressable} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputName, setTextInputName] = useState('');

  const checkTextInput = () => {
    //Check for the Email TextInput
    if (!textInputName.trim()) {
      setModalVisible(true);
      return;
    }
    navigation.navigate('SecondScreen', {
      paramKey: textInputName,
    })
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.header}>Your name?</Text>
      </View>

      <View style={{flex: 4,  alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <TextInput style={styles.input}
          value={textInputName}
          onChangeText={(value) => setTextInputName(value)}
          placeholder="Name"
          underlineColorAndroid={COLORS.white}
          selectionColor={COLORS.white}
          placeholderTextColor={"#E0E0E0"}
          maxLength={25}
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
                            GO FORWARD
                          </Text>
                        </TouchableOpacity>
                </View>
        </View>
      </View>

      <StatusBar backgroundColor={COLORS.primary} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please enter your name</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
     backgroundColor: '#242424',
  },
  modalView: {
    margin: 25,
    backgroundColor: '#484848',
    borderRadius: 5,
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 0,
  },
  buttonClose: {
    backgroundColor: '#484848',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
