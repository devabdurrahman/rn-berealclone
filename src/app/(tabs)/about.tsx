import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import {Image} from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: "https://avatars.githubusercontent.com/u/63262246?s=48&v=4",
      }} 
      style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  myFirstApp: {
    color: "skyblue",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
  }
});
