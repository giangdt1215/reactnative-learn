import { Button, Text, View } from "react-native";

interface CardProps {
  title: string;
  showButton: boolean;
}

export default function Card({title, showButton}: CardProps) {
  return (
    <View>
    <Text style={{fontSize: 60}}>{title}</Text>
    {showButton && <Button title="Press me!"/>}
  </View>
  )
}