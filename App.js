import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';

const App = () => {
  const [opacityValue] = useState(new Animated.Value(0));

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0.5,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text
        style={{
          fontSize: 20,
          opacity: opacityValue,
        }}
      >
        Hello 1
      </Animated.Text>
      <View style={{ height: 20 }} />
      <Animated.Text
        style={{
          fontSize: 20,
          opacity: opacityValue,
        }}
      >
       Hello 2
      </Animated.Text>
    </View>
  );
};

export default App;
