import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Board from "./board";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const { todo, in_process, done } = useSelector((state) => state.tasks);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TO DO"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="To Do"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="checksquareo" size={size} color={color} />
            ),
          }}
        >
          {() => <Board tasks={todo} id="TODO" />}
        </Tab.Screen>
        <Tab.Screen
          name="In Progress"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="progress-two" size={size} color={color} />
            ),
          }}
        >
          {() => <Board tasks={in_process} id="IN_PROCESS" />}
        </Tab.Screen>
        <Tab.Screen
          name="Done"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="checksquare" size={size} color={color} />
            ),
          }}
        >
          {() => <Board tasks={done} id="DONE" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
