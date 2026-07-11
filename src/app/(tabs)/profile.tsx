import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import {Image} from "expo-image";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
