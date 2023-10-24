import {StackScreenProps} from '@react-navigation/stack';
import {RootParamList} from './indesx';
import {Button, Text, View} from 'react-native';

type Screen2Props = StackScreenProps<RootParamList, 'Screen2'>;

const Screen2 = ({navigation, route}: Screen2Props) => {
  return (
    <View>
      <Text>Screen 2 - {route.params.paramA}</Text>
      <Button
        title="Screen3"
        onPress={() =>
          navigation.push('Screen3', {paramB: 'Giang', paramC: 95})
        }
      />
    </View>
  );
};

export default Screen2;
