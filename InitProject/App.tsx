/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InitView from './components/InitView';
import Counter from './components/Counter';
import Card from './components/Card';
import InputComp from './components/InputComp';
import ListView from './components/ListView';
import ReducerComp from './components/ReducerComp';
import TouchableHighlightComp from './components/TouchableHighlightComp';
import TouchableOpacityComp from './components/TouchableOpacityComp';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListComp from './components/FlatListComp';
import HomoSectionListComp from './components/HomoSectionListComp';
import HeterSectionListComp from './components/HeterSectionListComp';
import ViewComp from './components/ViewComp';
import ScreenComp from './components/screens/indesx';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <InitView title="My component 1" />
    //     <InitView title="My component 2" color="rgb(59, 108, 212)" />
    //     <Counter />
    //     <Card title="Card Title" showButton={true} />
    //     <InputComp />
    //     <ListView />
    //     <ReducerComp />
    //     <TouchableHighlightComp />
    //     <TouchableOpacityComp />
    //     {/* <FlatListComp /> */}
    //     {/* <HomoSectionListComp /> */}
    //     {/* <HeterSectionListComp /> */}
    //     {/* <ViewComp /> */}
    //   </ScrollView>
    // </SafeAreaView>
    <ScreenComp />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
