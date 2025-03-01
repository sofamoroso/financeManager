import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationProp, NavigationContainer } from "@react-navigation/native";

import EntryDelete from "./screens/entryDelete";
import EntryEdit from "./screens/entryEdit";
import EntryList from "./screens/entryList";
import CategoriesScreen from "./screens/CategoriesScreen";

import { CategoryProvider } from "./context/CategoryContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator(); // Bottom Tab Navigator
const Stack = createNativeStackNavigator(); // Stack Navigator

// Stack Navigation for Entries Tab
function EntriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EntryList" component={EntryList} />
      <Stack.Screen name="EntryEdit" component={EntryEdit} />
      <Stack.Screen name="EntryDelete" component={EntryDelete} />
    </Stack.Navigator>
  );
}

// Define RootStackParamList for TypeScript types
export type RootStackParamList = {
  Home: undefined;
  Entries: undefined;
  EditEntry: undefined;
  DeleteEntry: undefined;
};

export default function App({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  return (
    <CategoryProvider>
      {" "}
      {/* Categories are accessible everywhere */}
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Tab.Navigator>
              {/* Entries Tab with Stack navigation */}
              <Tab.Screen name="Entries" component={EntriesStack} />
              {/* Entries Tab with Stack navigation */}
              <Tab.Screen name="New" component={EntriesStack} />
              {/* Categories Tab */}
              <Tab.Screen name="Categories" component={CategoriesScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </CategoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
  },
});
