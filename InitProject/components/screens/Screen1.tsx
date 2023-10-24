import {StackScreenProps} from '@react-navigation/stack';
import {RootParamList} from './indesx';
import {Button, Text} from 'react-native';

type Screen1Props = StackScreenProps<RootParamList, 'Screen1'>;

const Screen1 = ({navigation, route}: Screen1Props) => {
  return (
    <>
      <Text>Screen 1</Text>
      <Button
        title="Screen2"
        onPress={() => navigation.push('Screen2', {paramA: 'Hello!'})}
      />
    </>
  );
};

export default Screen1;
