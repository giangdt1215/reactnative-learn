import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen3 from './Screen3';
import Screen2 from './Screen2';

export type RootParamList = {
  Screen1: undefined;
  Screen2: {paramA: string};
  Screen3: {paramB: string; paramC: number};
};

const Root = createStackNavigator<RootParamList>();

export default function ScreenComp() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
        <Root.Screen name="Screen3" component={Screen3} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
