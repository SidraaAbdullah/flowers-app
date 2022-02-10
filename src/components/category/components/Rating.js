import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { Colors } from '../constants/Theme';

const Rating = ({
  starSize,
  filled,
  containerPadding,
  containerBgColor,
  notRatedStarColor,
  type,
  padding,
}) => {
  // alert(filled)

  return (
    <View
      style={
        ({
          paddingHorizontal: containerPadding ? containerPadding : 2,
          backgroundColor: containerBgColor ? containerBgColor : 'transparent',
        },
        padding ? { alignItems: 'center', } : {})
      }
    >
      <FontAwesome
        style={padding ? { marginLeft: '6%', marginRight: '6%', } : {}}
        name={type === 'half' ? 'star-half-empty' : 'star'}
        size={starSize ? starSize : 20}
        color={
          type === 'filled' || type === 'half'
            ? '#FFD088'
            : notRatedStarColor
        }
      />
    </View>
  );
};
export {Rating};

const styles = StyleSheet.create({
  container: {},
});
