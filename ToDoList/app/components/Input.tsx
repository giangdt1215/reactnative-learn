import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

type InputProps = {
  placeholder: string;
  onSubmitEditing: (text: string) => void;
};

export default function Input({placeholder, onSubmitEditing}: InputProps) {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={value => setText(value)}
      onSubmitEditing={() => {
        if (!text) return;

        onSubmitEditing(text);
        setText('');
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});
