import {Button, View} from 'react-native';

interface InitViewProps {
  title: string;
  color?: string;
}

export default function InitView({title, color = '#1ACDA5'}: InitViewProps) {
  return (
    <View>
      <Button
        title={title}
        color={color}
        onPress={() => {
          console.log(title + 'Pressed');
        }}
      />
    </View>
  );
}
