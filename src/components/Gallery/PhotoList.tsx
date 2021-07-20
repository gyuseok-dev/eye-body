import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function PhotoList({ navigation }: TProps) {
  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  const getPhotos = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 10,
      });
      console.log(edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    // getPhotos();
  }, []);

  return (
    <View style={{ flexDirection: 'row', height: '100%', backgroundColor: '#202020' }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}
        onPress={isCallStackNavigator}></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}></TouchableOpacity>
    </View>
  );
}
