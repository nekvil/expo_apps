import React, { useState, useEffect } from "react";
import { ActionSheetIOS, Button, Text, View, StyleSheet, Platform, BackHandler, Alert } from "react-native";


export default function Settings() {
    const [result, setResult] = useState("IOS");
    const onPress = () =>
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Generate number", "Reset"],
          destructiveButtonIndex: 2,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark'
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            setResult(Math.floor(Math.random() * 100) + 1);
          } else if (buttonIndex === 2) {
            setResult("IOS");
          }
        }
      );

    useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (Platform.OS == 'ios'){
      return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button onPress={onPress} title="Show Action Sheet" />
    </View>
    );
    }
    else{
      return (
          <View style={styles.container}>
              <Text style={styles.result}>Try to go back from App!</Text>
          </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'
    },
    result: {
      fontSize: Platform.OS === 'ios' ? 32 : 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });
  