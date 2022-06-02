import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Feed() {
    return (
      <View style={styles.container}>
           <Text style={styles.text}>This is app was written in Visual Stidio Code!</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingBottom: 20,
      paddingStart: 15,
      paddingEnd: 15,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 25,
      textAlign: 'center',
      color: '#242424'
    }
  });
