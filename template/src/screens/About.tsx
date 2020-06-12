import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Logo from '~/assets/Logo';
import { RouteParams } from '~/Routes';
import { RouteProp } from '@react-navigation/native';

interface Props {
  navigation: BottomTabNavigationProp<RouteParams>;
  route: RouteProp<RouteParams, 'About'>;
}

const About: React.FC<Props> = ({ navigation, route }) => {
  const rotateValueHolder = new Animated.Value(0);
  const [state, setstate] = useState<string>();

  useEffect(() => {
    function startImageRotateFunction() {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 30000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => startImageRotateFunction());
    }

    startImageRotateFunction();
    if (route.params?.content) setstate(route.params.content);
    else console.log(JSON.stringify(route.params));
  }, [rotateValueHolder]);

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={{ color: 'white' }}>{state}</Text>
          <Animated.View style={[styles.appLogo, { transform: [{ rotate: rotateData }] }]}>
            <Logo />
          </Animated.View>
          <Text style={{ color: 'white' }}>Edit src/App.tsx and save to reload.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.appLink}>Learn React</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  app: {
    justifyContent: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    color: 'white',
  },
  appLogo: {
    height: 300,
    width: 300,
  },
  appLink: {
    padding: 5, // increase clickable area
    backgroundColor: 'red',
    color: '#61dafb',
  },
});
