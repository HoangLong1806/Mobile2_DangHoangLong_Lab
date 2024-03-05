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
import Svg, { Circle, Image as SvgImage } from 'react-native-svg';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Quả chuông */}
      <Svg height="100" width="100" style={styles.bell}>
        <SvgImage
          href={require('./assets/bell.png')}
          height="100"
          width="100"
        />
      </Svg>

      {/* Hình tròn */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          {/* Nội dung hình tròn */}
          {/* Bạn có thể thay đổi hình ảnh hoặc nội dung theo ý muốn */}
          <Image
            source={require('./assets/bat_quai.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>

      {/* Dòng văn bản */}
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

