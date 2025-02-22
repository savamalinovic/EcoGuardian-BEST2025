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
  import articlesConstants from '../constants/articlesConstants';
  
  
  const {width, height} = Dimensions.get('window');
  
  export default function ArticlesList({navigation, route}) {
    const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);
    const [hasPermission, setHasPermission] = React.useState(false);
  
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
  
    
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
            minWidth: '100%',
            height: 600,
            alignItems: 'center'
          }}>
          <View
            style={{
              paddingBottom: 20,
              flex: 1,
              paddingTop: 25,
              backgroundColor: 'white',
              justifyContent: 'flex-start',
              alignItems: 'center',
              minWidth: '100%',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
            }}>
            <ScrollView>
                <Text
                  style={{
                    
                    color: 'black',
                    fontFamily: 'Imprima-Regular',
                    textAlign: 'center',
                    fontSize: 18,
                    marginHorizontal: 12
                  }}>
                  {articlesConstants[route.params.text].text}
                </Text>
                
                { (route.params.text=="partners")? (
                <Image
                    source={require("../images/dodatno/partners.png")}
                    resizeMode='contain'
                    style={[{height: 340, width: 340, marginTop: 40}]}
                
                /> ): (<></>)               
                }
                <View style={[{height: 100}]}/>
  </ScrollView>
          </View>
        </View>
        
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
  