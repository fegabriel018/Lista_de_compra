import { Stack, useRouter } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <MaterialIcons name="home" size={24} color="black" />
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <MaterialIcons name="list" size={24} color="black" />
          <Text style={styles.buttonText}>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <MaterialIcons name="info" size={24} color="black" />
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f1f1f1",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
  },
});
