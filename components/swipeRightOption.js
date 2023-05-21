import { StyleSheet, View, Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { deleteTask, changeState } from "../redux/taskSlice";
import { TASK_STATE } from "../constants/enum";

export default function RightSwipeActions({ taskId, stateId, title }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTask({ taskId, stateId }));
  };
  const onChangeState = (toStateId) => {
    dispatch(changeState({ title, fromStateId: stateId, toStateId, taskId }));
  };

  return (
    <View style={styles.optionContainer}>
      {stateId.toLowerCase() === TASK_STATE.TODO ? (
        <>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("IN_PROCESS")}
          >
            <Animated.Text style={[styles.title, { color: "purple" }]}>
              To In Process
            </Animated.Text>
          </RectButton>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("DONE")}
          >
            <Animated.Text style={[styles.title, { color: "skyblue" }]}>
              To Done
            </Animated.Text>
          </RectButton>
        </>
      ) : (
        ""
      )}
      {stateId.toLowerCase() === TASK_STATE.IN_PROCESS ? (
        <>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("TODO")}
          >
            <Animated.Text style={[styles.title, { color: "purple" }]}>
              To ToDo
            </Animated.Text>
          </RectButton>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("DONE")}
          >
            <Animated.Text style={[styles.title, { color: "skyblue" }]}>
              To Done
            </Animated.Text>
          </RectButton>
        </>
      ) : (
        ""
      )}
      {stateId.toLowerCase() === TASK_STATE.DONE ? (
        <>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("TODO")}
          >
            <Animated.Text style={[styles.title, { color: "purple" }]}>
              To ToDo
            </Animated.Text>
          </RectButton>
          <RectButton
            style={styles.buttonOption}
            onPress={() => onChangeState("IN_PROCESS")}
          >
            <Animated.Text style={[styles.title, { color: "skyblue" }]}>
              To In Progress
            </Animated.Text>
          </RectButton>
        </>
      ) : (
        ""
      )}
      <RectButton style={styles.buttonOption} onPress={onDelete}>
        <Animated.Text style={[styles.title, { color: "red" }]}>
          Borrar
        </Animated.Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  buttonOption: {
    height: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
