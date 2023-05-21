import { createSlice } from "@reduxjs/toolkit";
import { TASK_STATE } from "../constants/enum";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    todo: [
      {
        id: 1,
        title: "TODO",
      },
      {
        id: 2,
        title: "Hacer Ejercicios",
      },
    ],
    in_process: [
      {
        id: 1,
        title: "IN PROCESS",
      },
      {
        id: 2,
        title: "Hacer Ejercicios",
      },
    ],
    done: [
      {
        id: 1,
        title: "DONE",
      },
      {
        id: 2,
        title: "Hacer Ejercicios",
      },
    ],
    modalStatus: false,
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state[TASK_STATE[action.payload.id]].length + 1,
        title: action.payload.task,
      };
      state[TASK_STATE[action.payload.id]].push(newTask);
    },
    changeState: (state, action) => {
      const newTask = {
        id: state[TASK_STATE[action.payload.toStateId]].length + 1,
        title: action.payload.title,
      };

      state[TASK_STATE[action.payload.toStateId]].push(newTask);

      state[TASK_STATE[action.payload.fromStateId]] = state[
        TASK_STATE[action.payload.fromStateId]
      ].filter((task) => task.id !== action.payload.taskId);
    },
    deleteTask: (state, action) => {
      state[TASK_STATE[action.payload.stateId]] = state[
        TASK_STATE[action.payload.stateId]
      ].filter((task) => task.id !== action.payload.taskId);
    },
    modalToggle: (state, action) => {
      state.modalStatus = action.payload;
    },
  },
});

export const { addTask, changeState, deleteTask, modalToggle } =
  taskSlice.actions;

export default taskSlice.reducer;
