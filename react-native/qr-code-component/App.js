import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import QRimage from "./assets/image-qr-code.png";
import { useFonts, Outfit_400Regular, Outfit_700Bold } from "@expo-google-fonts/outfit";

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Image style={styles.image} source={QRimage} />
          <View style={styles.textContainer}>
            <Text style={styles.headingContainer}>Improve your front-end skills by building projects</Text>
            <Text style={styles.paragraphContainer}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D5E1EF",
  },
  container: {
    width: 320,
    height: 499,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 40,
    paddingLeft: 16,
    gap: 24,
  },
  image: {
    width: 288,
    height: 288,
    borderRadius: 10,
  },
  headingContainer: {
    fontFamily: "Outfit_700Bold",
    fontSize: 22,
    color: "#1F314F",
    textAlign: "center",
  },
  paragraphContainer: {
    fontFamily: "Outfit_400Regular",
    textAlign: "center",
    color: "#68778D",
    fontSize: 15,
  },
  textContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
  },
});
