import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      
      {/* <Text style={styles.h1}>News feed</Text> */}

      <View style={styles.post}>
        <View style={{ flex: 6, backgroundColor: 'powderblue' }}>
          <Image
                style={styles.stretch}
                source={{uri: 'http://brightmagazine.ru/wp-content/uploads/2021/09/pexels-monstera-5634667.jpg'}}
          />  
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue'}} >
          <Text style={styles.h2}>5 книжных новинок октября</Text>
        </View>
        <View style={{ flex: 9, backgroundColor: 'steelblue'}} >
          <Text style={styles.p}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках. </Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Читать далее</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  scroller: {
    flex:1,
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 30,
    paddingStart: 20,
    paddingEnd: 20,
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
  // h1: {
  //   fontWeight: 'bold',
  //   fontSize: 25,
  //   paddingStart: 15,
  //   paddingBottom: 30,
  //   margin: 0,
  //   color: '#222',
  //   alignSelf: 'flex-start'
  // },

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
