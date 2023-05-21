import { StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import RightSwipeActions from "./swipeRightOption";

export default function Task({ title, taskId, stateId }) {
  return (
    <Swipeable
      renderRightActions={() => (
        <RightSwipeActions taskId={taskId} stateId={stateId} title={title} />
      )}
    >
      <View style={styles.container}>
        <RectButton style={styles.buttonOption}>
          <Text style={styles.title}>{title}</Text>
        </RectButton>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  title: {
    fontSize: 15,
  },
  buttonOption: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 20,
    alignItems: "flex-start",
    backgroundColor: "#ececec",
    marginBottom: 5,
  },
});
