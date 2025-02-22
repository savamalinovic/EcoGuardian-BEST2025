import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import tileConstants from '../constants/tileConstants';
import { Image } from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);

  const onSelectionPressed = id => {
    navigation.navigate('Input', {id});
  };

  return (
    <>
      <SafeAreaView
        style={
          (styles.container,
          {height: height, backgroundColor: '#185241'})
        }>
          <View style={[{width: '100%', maxHeight: '38%', }]}>
        <Image
          source={require('../images/icons/ecoWallpaper.png')}
          resizeMode='cover'
          style={
            (
            {
              maxHeight: '100%',
              width: '100%',
            })
          }
          
        />
        </View>
        <View
          style={{
            borderRadiusTopLeft: 20,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            height: 500,
            overflow: 'hidden'
          }}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 80,
              flexGrow: 1,
              padding: 20,
              paddingTop: 25,
              backgroundColor: 'white',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              overflow: 'hidden'
            }}>
            <View style={styles.row}>
              <View style={styles.column}>
                {tileConstants.map((item, index) => {
                  if (index % 2 !== 0) return null;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => onSelectionPressed(item.id)}
                      style={{
                        height: (width / 2) * item.aspectRatio,
                        backgroundColor: item.color,
                        marginBottom: 15,
                        padding: 15,
                        borderRadius: 20,
                        marginRight: 7.5,
                      }}
                      key={item.id}>
                      <FastImage
                        source={item.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.tileImage}
                      />
                      <Text style={styles.tileText}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View style={styles.column}>
                {tileConstants.map((item, index) => {
                  if (index % 2 === 0) return null;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => onSelectionPressed(item.id)}
                      style={{
                        height: (width / 2) * item.aspectRatio,
                        backgroundColor: item.color,
                        marginBottom: 15,
                        padding: 15,
                        borderRadius: 20,
                        marginLeft: 7.5,
                      }}
                      key={item.id}>
                      <FastImage
                        source={item.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.tileImage}
                      />
                      <Text style={styles.tileText}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>

        
      </SafeAreaView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 8,
          left: 8,
          width: width * 0.2,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: 100, 
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => navigation.navigate("ArticlesList", {text: "partners"}) }
        activeOpacity={0.8}>
        <FastImage
          source={require('../images/dodatno/storeplaces.png')}
          resizeMode={FastImage.resizeMode.center}
          style={styles.invalidButtonImage}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  scrollStyle: {
    width: '100%',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Imprima-Regular',
  },
  tileImage: {
    flex: 1,
  },
  invalidButtonImage: {
    aspectRatio: 1,
    height: '90%',
    width: '90%',
  },
});
