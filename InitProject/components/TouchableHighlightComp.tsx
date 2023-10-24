import {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

export default function TouchableHighlightComp() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#H1F4C6"
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text style={styles.text}>Press me!</Text>
      </TouchableHighlight>
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#F88',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
