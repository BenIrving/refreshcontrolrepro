// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import { GestureHandlerRootView } from 'react-native-gesture-handler';


// import React from 'react';
// import {
//   FlatList,
//   View,
//   StatusBar,
//   Text,
//   TouchableOpacity,
//   useColorScheme,
//   RefreshControl,
//   SectionList,
// } from 'react-native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { enableScreens } from 'react-native-screens';
// import Animated from 'react-native-reanimated';

// enableScreens();

// const RootStack = createNativeStackNavigator();

// const StackA = createNativeStackNavigator();

const data = [{ title: '1', data: [1, 2, 3] }]
const allData = data.concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data)
// const AnimatedSectionList = Animated.createAnimatedComponent(SectionList)
// const AnimatedRefreshControl = Animated.createAnimatedComponent(RefreshControl)
// const DummyComponent1 = () => {
//   const nav = useNavigation();

//   return (
//     // <View>
//     //   <Text>Screen 1</Text>
//     //   <Animated.FlatList
//     //     refreshControl={<RefreshControl refreshing={false}/>}
//     //     // removeClippedSubviews={false}
//     //     horizontal
//     //     renderItem={({index}) => {
//     //       return (
//     //         <TouchableOpacity onPress={() => nav.navigate('Screen2')} style={{borderWidth: 1}}>
//     //           <Text>Press me</Text>
//     //         </TouchableOpacity>
//     //       );
//     //     }}
//     //     data={Array(1).fill(1, 1, 1)}
//     //   />
//     // </View>
//     <View>
//       <TouchableOpacity onPress={() => nav.goBack()}>
//         <Text>Back</Text>
//       </TouchableOpacity>
//       <Text>Screen 1</Text>
//       <TouchableOpacity onPress={() => nav.navigate('Screen2')} style={{ borderWidth: 1 }}>
//         <Text>Now Press me</Text>
//       </TouchableOpacity>
//       {/* <SectionList
//         sections={allData}
//         // refreshControl={<RefreshControl refreshing={false}/>}
//         // removeClippedSubviews={false}
//         renderItem={({index}) => {
//           return (
//             <TouchableOpacity onPress={() => nav.navigate('Screen2')} style={{borderWidth: 1}}>
//               <Text>Now Press me</Text>
//             </TouchableOpacity>
//           );
//         }}
//         // data={Array(1).fill(1, 1, 1)}
//       /> */}
//     </View>
//   );
// };
// const DummyComponent2 = () => {
//   const nav = useNavigation();
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{height: 300}}>
//         <View>
//         <TouchableOpacity onPress={() => nav.goBack()}>
//           <Text>Back</Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//       <Text>Screen 2</Text>
//       <AnimatedSectionList
//         sections={allData}
//         // refreshControl={<AnimatedRefreshControl refreshing={false} />}
//         // removeClippedSubviews={false}
//         renderItem={({ index }) => {
//           return (
//             <TouchableOpacity onPress={() => nav.goBack()}>
//               <Text>Now Press me</Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const Stack = () => {
//   return (
//     <StackA.Navigator
//       initialRouteName="Screen1"
//       screenOptions={{ headerShown: false, hideKeyboardOnSwipe: true }}>
//       <StackA.Screen name="Screen1" component={DummyComponent1} />
//       <StackA.Screen name="Screen2" component={DummyComponent2} />
//     </StackA.Navigator>
//   );
// };

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <View
//           style={{
//             flex: 1,
//             borderWidth: 1,
//             padding: 10
//           }}>
//           <StatusBar
//             barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//             backgroundColor={backgroundStyle.backgroundColor}
//           />
//           <RootStack.Navigator
//             initialRouteName="ScreensA"
//             screenOptions={{ headerShown: false, hideKeyboardOnSwipe: true }}>
//             <RootStack.Screen component={Stack} name="stack" />
//             {/* <RootStack.Screen component={ScreensB} name="ScreensB" /> */}
//           </RootStack.Navigator>
//         </View>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  useColorScheme,
  RefreshControl,
  SectionList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

enableScreens();

const RootStack = createNativeStackNavigator();

const StackA = createNativeStackNavigator();

const DummyComponent1 = () => {
  const nav = useNavigation();

  return (
    <View>
      <Text>Screen 1</Text>
      <SectionList
        refreshControl={<RefreshControl refreshing={false}/>}
        // removeClippedSubviews={false}
        horizontal
        renderItem={({index}) => {
          return (
            <TouchableHighlight onPress={() => nav.navigate('Screen2')}>
              <Text>Press me</Text>
            </TouchableHighlight>
          );
        }}
        sections={allData}
      />
    </View>
  );
};
const DummyComponent2 = () => {
  const nav = useNavigation();
  return (
    <View>
      <Text>Screen 2</Text>
      <SectionList
        refreshControl={<RefreshControl refreshing={false}/>}
        // removeClippedSubviews={false}
        renderItem={({index}) => {
          return (
            <TouchableHighlight onPress={() => nav.navigate('Screen1')}>
              <Text>Now Press me</Text>
            </TouchableHighlight>
          );
        }}
        sections={allData}
      />
    </View>
  );
};

const Stack = () => {
  return (
    <StackA.Navigator
      initialRouteName="Screen1"
      screenOptions={{headerShown: false, hideKeyboardOnSwipe: true}}>
      <StackA.Screen name="Screen1" component={DummyComponent1} />
      <StackA.Screen name="Screen2" component={DummyComponent2} />
    </StackA.Navigator>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
        }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootStack.Navigator
          initialRouteName="ScreensA"
          screenOptions={{headerShown: false, hideKeyboardOnSwipe: true}}>
          <RootStack.Screen component={Stack} name="stack" />
          {/* <RootStack.Screen component={ScreensB} name="ScreensB" /> */}
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;