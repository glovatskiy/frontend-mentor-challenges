
import { StyleSheet, Text, View } from 'react-native';
import BlogCard from './components/BlogCard';

export default function App() {
  return (
    <View style={styles.container}>
      <BlogCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4D04E",
    alignItems: "center",
    justifyContent: "center",
  },
});
