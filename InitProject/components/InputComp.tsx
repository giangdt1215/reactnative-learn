import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export default function InputComp() {
  const [text, setText] = useState<string>('');

  return (
    <View>
      <TextInput
        value={text}
        style={{fontSize: 42, color: 'steelblue'}}
        placeholder="Type here..."
        onChangeText={text => setText(text)}
      />
      <Text style={{fontSize: 24}}>
        {'\n'}You entered: {text}
      </Text>
    </View>
  );
}
