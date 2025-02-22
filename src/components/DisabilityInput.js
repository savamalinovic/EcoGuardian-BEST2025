import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import FastImage from 'react-native-fast-image';

export default function DisabilityInput({onPress}){

    const handleClick = () => {
        onPress(true);
      };

    return(
        <View style={{alignItems:'center', width: '100%', overflow: 'visible'}}>
            <Text
              style={{
                width: '70%',
                color: 'black',
                fontFamily: 'Imprima-Regular',
                textAlign: 'left',
                fontSize: 20,
              }}>
              Naziv mjesta:
            </Text>
            <View
              style={{
                minWidth: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                alignItems: 'center',
                overflow: 'visible',
              }}>
              <View style={{width: '15%', height: '100%'}} />
              <TextInput
              placeholder='npr. caffe bar "Rock"'
              placeholderTextColor={'white'}
                style={{
                  fontSize: 18,
                  fontFamily: 'Imprima-Regular',
                  backgroundColor: '#FDD967',
                  overflow: 'hidden',
                  maxWidth: '70%',
                  width: '70%',
                  borderRadius: 10,
                  height: 60,
                }}
              />
            </View>
        
        <Text
          style={{
            width: '70%',
            color: 'black',
            fontFamily: 'Imprima-Regular',
            textAlign: 'left',
            fontSize: 20,
            marginTop: 20
          }}>
          Detaljan opis:
        </Text>

        <TextInput
        placeholder='npr. caffe bar "Rock"'
        placeholderTextColor={'white'}
          multiline={true}
          style={{
            fontSize: 18,
            fontFamily: 'Imprima-Regular',
            backgroundColor: '#FDD967',
            overflow: 'hidden',
            maxWidth: '70%',
            width: '70%',
            borderRadius: 10,
            height: 110,
            padding:5
          }}
        />

        <TouchableOpacity
        onPress={handleClick}
          style={{
            width: '40%',
            height: '20%',
            backgroundColor: '#9E673E',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
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
        
    
    )
}