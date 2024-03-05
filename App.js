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

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const squarePosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [animation, setAnimation] = useState(null);

  const startAnimation = () => {
    if (animation) {
      animation.stop();
    }

    const newAnimation = Animated.timing(squarePosition, {
      toValue: { x: 200, y: 200 },
      duration: 2000,
      useNativeDriver: false,
    });

    setAnimation(newAnimation);
    newAnimation.start();
  };

  const stopAnimation = () => {
    if (animation) {
      animation.stop();
    }
  };

  const restartAnimation = () => {
    stopAnimation();
    squarePosition.setValue({ x: 0, y: 0 });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'blue',
          transform: [{ translateX: squarePosition.x }, { translateY: squarePosition.y }],
        }}
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={startAnimation} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopAnimation} style={styles.button}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={restartAnimation} style={styles.button}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default App;
