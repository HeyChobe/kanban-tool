import { RectButton } from "react-native-gesture-handler";
import { TouchableRipple } from "react-native-paper";
import { View, Text, Modal, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, addTask } from "../redux/taskSlice";
import { useState } from "react";

export default function ModalInput({ id }) {
  const dispatch = useDispatch();
  const { modalStatus } = useSelector((state) => state.tasks);
  const [task, setTask] = useState();

  const onCloseModal = () => {
    dispatch(modalToggle(false));
  };

  const onAddUser = () => {
    dispatch(addTask({ id, task }));
    onCloseModal();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalStatus}>
      <View style={styles.margin}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Type name of your task"
            value={task}
            onChangeText={(value) => setTask(value)}
          />
          <View style={styles.buttoncontainer}>
            <TouchableRipple onPress={onAddUser}>
              <RectButton
                style={[styles.button, { backgroundColor: "skyblue" }]}
              >
                <Text style={styles.label}>Add</Text>
              </RectButton>
            </TouchableRipple>
            <TouchableRipple onPress={onCloseModal}>
              <RectButton style={[styles.button, { backgroundColor: "red" }]}>
                <Text style={styles.label}>Cancel</Text>
              </RectButton>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  margin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoncontainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    width: 250,
  },
  button: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  label: {
    color: "white",
  },
});
