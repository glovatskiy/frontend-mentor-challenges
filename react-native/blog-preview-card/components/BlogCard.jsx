import { View, Image, StyleSheet, Text } from "react-native";
import BlogImage from "../assets/images/download.png";
import Avatar from "../assets/images/image-avatar.webp";
import { useFonts } from "expo-font";

const BlogCard = () => {
  const [fontsLoaded] = useFonts({
    Figtree: require("../assets/fonts/Figtree-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={BlogImage} accessibilityLabel="Abstract image" />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardLabel}>Learning</Text>
        <Text style={styles.cardDate}>Published 21 Dec 2023</Text>
        <Text style={styles.cardHeading}>HTML & CSS foundations</Text>
        <Text style={styles.cardParagraph}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Text>
      </View>
      <View style={styles.authorContainer}>
        <Image
          style={styles.authorAvatar}
          source={Avatar}
          accessibilityLabel="author's avatar"
        />
        <Text style={styles.authorName}>Greg Hooper</Text>
      </View>
    </View>
  );
};
export default BlogCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    width: 327,
    height: 501,
    padding: 24,
    borderRadius: 20,
    boxShadow: "8px 8px 0px 0px #111111",
    borderWidth: 1,
    borderColor: "#111111",
    borderStyle: "solid",
    gap: 24,
  },
  cardImage: {
    width: 279,
    height: 200,
    borderRadius: 10,
  },
  cardLabel: {
    alignSelf: "flex-start",
    backgroundColor: "#F4D04E",
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 12,
    borderRadius: 4,
    fontFamily: "Figtree",
    fontWeight: "800",
  },
  cardDate: {
    fontFamily: "Figtree",
    fontSize: 12,
  },
  cardHeading: {
    fontFamily: "Figtree",
    fontSize: 20,
    fontWeight: "900",
  },
  cardParagraph: {
    fontFamily: "Figtree",
    fontSize: 14,
    color: "#6B6B6B",
  },
  authorAvatar: {
    width: 32,
    height: 32,
  },
  authorName: {
    fontFamily: "Figtree",
    fontWeight: "800",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardTextContainer: {
    gap: 12,
  },
});
