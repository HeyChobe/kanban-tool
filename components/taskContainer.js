import { StyleSheet, FlatList, View } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { modalToggle } from "../redux/taskSlice";
import Task from "./task";
import ModalInput from "./modalInput";

export default function TaskContainer({ data, id }) {
  const dispatch = useDispatch();

  const onAddUser = () => {
    dispatch(modalToggle(true));
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <ModalInput id={id} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Task title={item.title} taskId={item.id} stateId={id} />
          )}
          keyExtractor={(item) => item.id}
        />
        <RectButton style={styles.fabButton} onPress={onAddUser}>
          <Entypo name="plus" size={24} color="white" />
        </RectButton>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  fabButton: {
    position: "absolute",
    padding: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#e91e63",
    borderRadius: 15,
  },
});
