import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import {Image} from "expo-image";
import {Link,useRouter,Redirect } from "expo-router";

export default function Index() {
  const isAuth = false;

  if (!isAuth) {
    return <Redirect href="/(auth)/login" />;
  }

  const router = useRouter()
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"}/>
      <Text style={styles.myFirstApp}>My First IOS App: Tutorial watched till 26:45 Minutes</Text>
      <TextInput placeholder="First Name" />
      <Link href={"/about"}>Go to About Screen</Link>
      <Button title="Navigate" onPress={() => router.push("/about")}/>
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
