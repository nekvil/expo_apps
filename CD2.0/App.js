import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 0) {
    textLog = timesPressed;
  } else {
    textLog = "press on text";
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'white'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Hello world!' : 'Hello'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: 'center', 
  },
  text: {
    fontSize: 26, 
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 50,
    padding: 100,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderColor: '#f0f0f0',
    alignSelf: 'center',
  }
});

export default App;