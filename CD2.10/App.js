import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image2: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image3: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image4: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image5: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image6: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
  image7: {uri: 'https://i.giphy.com/media/S8fs8JWbdj0zilVWHZ/giphy.webp'},
};

const App = () => {

  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
    { id: '7', image: IMAGES.image7 }
  ]);

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * THUMB_SIZE,
      animated: true
    });
  };

  const carouselRef = useRef();
  const onTouchThumbnail = touched => {
    if (touched === indexSelected) return;
    carouselRef?.current?.snapToItem(touched);
  };

  const flatListRef = useRef();
  

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          marginTop: 50,
          marginBottom: 25
        }}
      >
        Gif Gallery
      </Text>
      {/* Carousel View */}
      {/* Thumbnail component using FlatList */}
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
          {/* Title JSX Remains same */}
          {/* Carousel View */}
          <View style={{ flex: 1 / 2, marginTop: 20 }}>
            <Carousel
              ref={carouselRef}
              onSnapToItem={index => onSelect(index)}
              layout="default"
              data={images}
              sliderWidth={width}
              itemWidth={width}
              renderItem={({ item, index }) => (
                <Image
                  key={index}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="contain"
                  source={item.image}
                />
              )}
            />
          </View>

          <View>
            {/* Carousel Component code remains same */}
            <Pagination
              inactiveDotColor="gray"
              dotColor={'white'}
              activeDotIndex={indexSelected}
              dotsLength={images.length}
              animatedDuration={150}
              inactiveDotScale={1}
            />
          </View>
                      <View
              style={{
                marginTop: 20,
                paddingHorizontal: 32,
                alignSelf: 'flex-end'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 22
                }}
              >
                {indexSelected + 1}/{images.length}
              </Text>
            </View>

        </View>


          <FlatList
          ref={flatListRef}
          horizontal={true}
          data={images}
          style={{ position: 'absolute', bottom: 80 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: SPACING
          }}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
          <TouchableOpacity 
            onPress={() => onTouchThumbnail(index)}
            activeOpacity={0.9}>
              <Image
                style={{
                  width: THUMB_SIZE,
                  height: THUMB_SIZE,
                  marginRight: SPACING,
                  // borderRadius: 16,
                  // borderWidth: index === indexSelected ? 4 : 0.75,
                  // borderColor: index === indexSelected ? 'white' : 'grey'
                }}
                source={item.image}
              />
            </TouchableOpacity>
          )}
        />

      <StatusBar backgroundColor='black'/>
    </View>
  );
};

export default App;
