import { StyleSheet } from "react-native";
import { screenWidth } from "themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childWrapper: {
    flex: 1,
    width: screenWidth,
    height: "100%",
  },
});
