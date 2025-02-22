import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FastImage
        source={require('../images/dodatno/forestWallpaper.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={{height: '100%'}}
      />

<Text
        style={{
          position: 'absolute',
          top: '15%',
          color: '#91AAAB',
          fontFamily: 'Imprima-Regular',
          fontSize: 35,
          alignSelf: 'center',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
        }}>
        Carbon
      </Text>

      <Text
        style={{
          position: 'absolute',
          top: '24%',
          color: '#7a7a7a',
          fontFamily: 'Imprima-Regular',
          fontSize: 22,
          alignSelf: 'center',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
        }}>
        Prijavite se na svoj nalog
      </Text>

      <View
        style={{
          position: 'absolute',
          top: '35%',
          width: '80%',
          backgroundColor: 'white',
          padding: 30,
          alignSelf: 'center',
          borderRadius: 20,
        }}>
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2.5,
            borderColor: '#91AAAB',
            borderRadius: 10,
            color: 'black',
            fontFamily: 'Imprima-Regular',
            paddingHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#E4EEE8'
          }}
          placeholderTextColor="#91AAAB"
          placeholder="Email..."
        />
        <TextInput
          secureTextEntry={true}
          style={{
            padding: 10,
            borderWidth: 2.5,
            borderColor: '#91AAAB',
            color: 'black',
            fontFamily: 'Imprima-Regular',
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#E4EEE8'
          }}
          placeholderTextColor="#91AAAB"
          placeholder="Vaša šifra..."
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {navigation.navigate('TabNavigator')}}
          style={{
            backgroundColor: '#91AAAB',
            borderRadius: 100,
            padding: 20,
            paddingVertical: 10,
            width: '70%',
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Imprima-Regular',
              textAlign: 'center'
            }}>
            Nastavite
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#91AAAB',
              fontSize: 15,
              fontFamily: 'Imprima-Regular',
            }}>
            Zaboravili ste šifru?
          </Text>
          <Text
            style={{
              color: '#91AAAB',
              fontSize: 15,
              fontFamily: 'Imprima-Regular',
            }}>
            Registrujte se
          </Text>
        </View>
      </View>


    </View>
  );
}
