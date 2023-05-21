import { StyleSheet, Text, View } from "react-native";

export default function Title({ label }) {
  return <Text style={styles.title}>{label}</Text>;
}

const styles = StyleSheet.create({
  title: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    fontSize: 20,
    marginTop: 20,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
