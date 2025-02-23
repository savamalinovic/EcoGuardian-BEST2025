import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

//TODO: export colors to constants

export default function TabBarButton(props) {
  const {item, onPress, accessibilityState} = {...props};
  const focused = accessibilityState.selected;

  const [startup, setStartup] = useState(true);

  const viewRef = useRef(null);
  useEffect(() => {
    if (!startup) {
      if (focused) {
        viewRef.current.animate({
          0: {rotate: '0deg', scale: 0.9},
          1: {rotate: '360deg', scale: 1.2},
        });
      } else {
        viewRef.current.animate({
          0: {rotate: '360deg', scale: 1.2},
          1: {rotate: '0deg', scale: 0.9},
        });
      }
    } else {
      setStartup(false);
      if (focused) {
        viewRef.current.animate({0: {scale: 1.2}, 1: {scale: 1.2}});
      } else {
        viewRef.current.animate({0: {scale: 0.9}, 1: {scale: 0.9}});
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => {
        onPress();
      }}>
      <Animatable.View style={styles.container} ref={viewRef} duration={1000}>
        <item.type
          name={focused ? item.activeIcon : item.inactiveIcon}
          size={32}
          color={focused ? '#91AAAB' : '#B0BBB6'}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
