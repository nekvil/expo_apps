import React from 'react'
import { Image, TouchableOpacity, ToastAndroid, StyleSheet, Platform, ScrollView, Text, View, StatusBar } from 'react-native';


export default function Feed() {

    const showToastWithGravity = () => {
          if (Platform.OS == 'android'){
            ToastAndroid.showWithGravity(
            "Yeah!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      };

    return (
      <ScrollView>
 
      <View style={styles.container}>
  
        <View style={styles.post}>
          <Image
              style={styles.stretch}
              source={{uri: 'http://brightmagazine.ru/wp-content/uploads/2022/04/pexels-burst-373945-768x512.jpg'}}
            />
          <Text style={styles.h2}>Как музыка может улучшить качество нашей жизни?</Text>
          <Text style={styles.p}>Музыка во все времена и в разных культурах играла очень важную роль. Наши предки погружались в нее и в горе, и в радости.</Text>
          <TouchableOpacity 
          style={styles.button}
          onPress={showToastWithGravity} >
              <Text style={styles.buttonText}>Читать далее</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.post}>
          <Image
              style={styles.stretch}
              source={{uri: 'http://brightmagazine.ru/wp-content/uploads/2022/04/pexels-gary-barnes-6248808-768x512.jpg'}}
            />
          <Text style={styles.h2}>Фрикадельки – блюдо с историей</Text>
          <Text style={styles.p}>Что вы знаете о фрикадельках, кроме того, что это вкусно и сытно? А им есть что рассказать о себе.</Text>
          <TouchableOpacity style={styles.button}
          onPress={showToastWithGravity}>
              <Text style={styles.buttonText}>Читать далее</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.post}>
          <Image
              style={styles.stretch}
              source={{uri: 'http://brightmagazine.ru/wp-content/uploads/2022/03/pexels-karolina-grabowska-6328838-768x512.jpg'}}
            />
          <Text style={styles.h2}>Дела любовные. Самые романтичные книжные новинки</Text>
          <Text style={styles.p}>Переосмысление сказки «Спящая красавица» в романе Джейн Йолен; очаровательная и смешная история любви в дебютном романе Рэйчел Уинтерс; захватывающая история межрасовых отношений в книге Мэлори Блэкман; сентиментальная проза Ребекки Сёрл и атмосферный роман Дженнифер Робсон, действия которого разворачиваются во времена Первой мировой войны. Рассказываем о главных книжных новинках посвященных самой вечной теме — теме любви. </Text>
          <TouchableOpacity style={styles.button}
                onPress={showToastWithGravity}>
              <Text style={styles.buttonText}>Читать далее</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
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
      justifyContent: 'flex-start',
    },
    header: {
      flex: 1,
      paddingTop: 80,
      paddingBottom: 30,
      paddingStart: 20,
      paddingEnd: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    post: {
      flex: 1,
      backgroundColor: '#fff',
      paddingStart: 15,
      paddingEnd: 15,
      alignSelf: 'stretch',
      marginBottom: 40
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 30,
      padding: 0,
      margin: 0,
      color: '#222',
      alignSelf: 'flex-start'
    },
  
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      padding: 0,
      margin: 0,
      color: '#222',
      alignSelf: 'center'
    },
    p: {
      marginTop: 12,
      marginBottom: 0,
      alignSelf: 'flex-start',
      lineHeight: 23,
      fontSize: 14
    },
    button: {
      marginTop: 22,
      backgroundColor: "#212121",
      paddingTop: 11, 
      paddingBottom: 11,
      paddingStart: 22,
      paddingEnd: 22,
      alignSelf: 'flex-start',
      borderRadius: 15
    },
    buttonText: {
      fontSize: 15,
      color: '#fff',
    },
    stretch: {
      alignSelf: 'stretch',
      height: 200,
      marginBottom: 20,
      resizeMode: 'cover'
    }
  });
