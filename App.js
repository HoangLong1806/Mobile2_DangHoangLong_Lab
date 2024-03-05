// import React, { useEffect, useState } from 'react';
// import { View, Text, Animated } from 'react-native';

// const App = () => {
//   const [opacityValue] = useState(new Animated.Value(0));

//   useEffect(() => {
//     animateText();
//   }, []);

//   const animateText = () => {
//     Animated.sequence([
//       Animated.timing(opacityValue, {
//         toValue: 0.5,
//         duration: 3000,
//         useNativeDriver: false,
//       }),
//       Animated.timing(opacityValue, {
//         toValue: 1,
//         duration: 3000,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Animated.Text
//         style={{
//           fontSize: 20,
//           opacity: opacityValue,
//         }}
//       >
//         Hello 1
//       </Animated.Text>
//       <View style={{ height: 20 }} />
//       <Animated.Text
//         style={{
//           fontSize: 20,
//           opacity: opacityValue,
//         }}
//       >
//        Hello 2
//       </Animated.Text>
//     </View>
//   );
// };

// export default App;



// cau 2

// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Animated } from 'react-native';

// const App = () => {
//   const squarePosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
//   const [animation, setAnimation] = useState(null);

//   const startAnimation = () => {
//     if (animation) {
//       animation.stop();
//     }

//     const newAnimation = Animated.timing(squarePosition, {
//       toValue: { x: 200, y: 200 },
//       duration: 2000,
//       useNativeDriver: false,
//     });

//     setAnimation(newAnimation);
//     newAnimation.start();
//   };

//   const stopAnimation = () => {
//     if (animation) {
//       animation.stop();
//     }
//   };

//   const restartAnimation = () => {
//     stopAnimation();
//     squarePosition.setValue({ x: 0, y: 0 });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Animated.View
//         style={{
//           width: 50,
//           height: 50,
//           backgroundColor: 'blue',
//           transform: [{ translateX: squarePosition.x }, { translateY: squarePosition.y }],
//         }}
//       />
//       <View style={{ marginTop: 20 }}>
//         <TouchableOpacity onPress={startAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Start</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={stopAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Stop</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={restartAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Restart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = {
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// };

// export default App;


// cau 3


import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  withRepeat,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const App = () => {
  const bellX = useSharedValue(0);
  const circleRotation = useSharedValue(0);

  const bellStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: bellX.value }, { translateY: bellX.value }],
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${circleRotation.value}deg` }],
    };
  });

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = bellX.value;
    },
    onActive: (event, ctx) => {
      bellX.value = ctx.x + event.translationX;
    },
  });

  return (
    <View style={styles.container}>
      
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View style={[styles.bell, bellStyle]}>
          <Image
            source={require('./assets/bell.png')}
            style={{ width: 100, height: 100 }}
          />
        </Animated.View>
      </PanGestureHandler>

      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, circleStyle]}>
          <Image
            source={require('./assets/bat_quai.png')}
            style={{ width: 50, height: 50 }}
          />
        </Animated.View>
      </View>

      
      <Text style={styles.text}>
        Xin chào, đây là một dòng văn bản hợp với nội dung!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  bell: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  circleContainer: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

export default App;
