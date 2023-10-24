import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {RootParamList} from './indesx';
import {Button, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type Screen3Props = StackScreenProps<RootParamList, 'Screen3'>;

const Screen3 = ({navigation, route}: Screen3Props) => {
  const navHook =
    useNavigation<StackNavigationProp<RootParamList, 'Screen3'>>();
  const routeHook = useRoute<RouteProp<RootParamList, 'Screen3'>>();

  return (
    <View>
      <Text>
        Screen 3 - {`${routeHook.params.paramB} - ${routeHook.params.paramC}`}
      </Text>
      <Button title="Screen1" onPress={() => navHook.push('Screen1')} />
    </View>
  );
};

export default Screen3;
