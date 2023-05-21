import { StyleSheet, View } from "react-native";
import TaskContainer from "./taskContainer";

export default function Board({ tasks, id }) {
  return (
    <View style={styles.container}>
      <TaskContainer data={tasks} id={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
});
