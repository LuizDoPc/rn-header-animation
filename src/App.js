/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Animated} from 'react-native';

import Header from './Header';
import Card from './Card';

const App = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 100);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
  });
  const height = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 50],
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Animated.View
          style={{
            transform: [{translateY}],
            elevation: 4,
            zIndex: 100,
            height,
          }}>
          <Header />
        </Animated.View>

        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}>
          {Array(50)
            .fill(0)
            .map((item, index) => (
              <Card key={index} />
            ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
