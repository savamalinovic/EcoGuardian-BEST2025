import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import inputConstants from '../constants/inputConstants';
import DigitsInput from 'react-native-digits-input';
import DisabilityInput from '../components/DisabilityInput';
import { Image } from 'react-native-animatable';


const {width, height} = Dimensions.get('window');

export default function InputScreen({navigation, route}) {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);
  const [hasPermission, setHasPermission] = React.useState(false);

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const [toastVisible, setToastVisible] = useState(false);

  const makeToast = (isPressed) => {
    if(isPressed){
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500); 
    }
  };

  const [toastVisible2, setToastVisible2] = useState(false);

  const makeToast2 = (isPressed) => {
    if(isPressed){
    setToastVisible2(true);
    setTimeout(() => setToastVisible2(false), 3500); 
    }
  };

  const handleTextChange = (inputText, order) => {
    console.log(order);
    if (order == 1) {
      setText(inputText.toUpperCase());
    } else if (order == 2) {
      setText2(inputText.toUpperCase());
    }
  };


  return (
    <SafeAreaView
      style={
        (styles.container,
        {paddingTop: backgroundImageHeight, backgroundColor: '#185241'})
      }>
      <Image
        source={require('../images/dodatno/ecoWallpaper.png')}
        resizeMode='cover'
        style={
          (styles.background,
          {
            height: 200,
            width: '100%'
          })
        }
      />

      <View
        style={{
          borderRadiusTopLeft: 20,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          overflow: 'hidden',
          maxWidth: '100%',
          height: height - backgroundImageHeight,
        }}>
        <View
          style={{
            paddingBottom: 20,
            flex: 1,
            paddingTop: 25,
            backgroundColor: 'white',

            maxWidth: '100%',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}>
          <View style={{height: '34%', maxWidth: '100%', alignItems: 'center'}}>
          <View style={{height: '10%'}}/>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                {inputConstants[route.params.id].input}
              </Text>

              {(inputConstants[route.params.id].description!="")?(
              <Text style={{color: 'blue'}}
              onPress={() => navigation.navigate("ArticlesList", {text: inputConstants[route.params.id].description}) }>
              ovdje.
              </Text>
              ):(<></>)
              }

              <TextInput
              keyboardType='number-pad'
                value={text2}
                onChangeText={inputText => handleTextChange(inputText, 2)}
                textAlign="center"
                maxLength={6}
                style={{
                  fontSize: 18,
                  fontFamily: 'Imprima-Regular',
                  backgroundColor: '#E2E8E1',
                  overflow: 'hidden',
                  maxWidth: '70%',
                  width: '70%',
                  borderRadius: 10,
                  height: 60,
                }}
              />
  
              <TouchableOpacity
              onPress={makeToast2}
                style={{
                  width: '40%',
                  height: '20%',
                  backgroundColor: '#91AAAB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Imprima-Regular',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Potvrdi
                </Text>
              </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#E4EEE8',
              width: '100%',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              padding: 30,
              minHeight: '48%',
            }}
            >
            <ScrollView style={[{flex: 1}]}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                  fontSize: 20,
                  textAlign: 'center'
                }}>
                {inputConstants[route.params.id].text}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Imprima-Regular',
                    fontSize: 26,
                    textAlign: 'center',
                  }}>
                  1 x{' '}
                </Text>
                <FastImage
                  source={inputConstants[route.params.id].image}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{width: width * 0.2, aspectRatio: 1}}
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Imprima-Regular',
                    fontSize: 26,
                    textAlign: 'center',
                  }}>
                  {' '}
                  = {inputConstants[route.params.id].value}
                </Text>
                <FastImage
                  source={require('../images/dodatno/carbonCoin.png')}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{width: width * 0.3, aspectRatio: 1}}
                />
              </View>
              <View style={[{height: 70}]}/>
            </ScrollView>
          </View>
        
        </View>
      </View>
      {toastVisible && (
        <View style={{ position: 'absolute', bottom: 100, alignItems: 'center', width: '100%'}}>
          <Text style={{textAlign: 'center', fontSize:16, color: 'white', backgroundColor: '#c9c9c9', height: 20, borderRadius: 20, padding: 5, height: 50}}>Hvala Vam! Vaša recenzija je proslijeđena{'\n'}na moderaciju.</Text>
        </View>
      )}
      {toastVisible2 && (
        <View style={{ position: 'absolute', bottom: 100, alignItems: 'center', width: '100%'}}>
          <Text style={{textAlign: 'center', fontSize:16, color: 'white', backgroundColor: '#c9c9c9', height: 20, borderRadius: 20, padding: 5, height: 50}}>Čestitamo! Poeni će uskoro biti dodati.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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
  },
});
