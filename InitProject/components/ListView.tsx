import { Text, View } from "react-native";

const data = [
  {id: 'a', name: 'Devin'},
  {id: 'b', name: 'Gabe'},
  {id: 'c', name: 'Kim'},
];

export default function ListView() {
  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  )
}