import EntryDelete from "./screens/entryDelete";
import EntryEdit from "./screens/entryEdit";
import EntryList from "./screens/entryList";
import CategoriesScreen from "./screens/CategoriesScreen";

import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { store } from "./store/store";
import { Provider } from "react-redux";

// Define RootStackParamList for TypeScript types
export type RootStackParamList = {
  ListEntries: undefined;
  EditEntry: undefined;
  DeleteEntry: undefined;
};

const EntriesStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    ListEntries: {
      screen: EntryList,
      options: {
        title: "My entries",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#0000",
        },
      },
    },
    EditEntry: {
      screen: EntryEdit,
      options: {
        title: "Edit this entry",
      },
    },
    DeleteEntry: {
      screen: EntryDelete,
      options: {
        title: "Delete this entry",
      },
    },
  },
});

const BottomTabs = createBottomTabNavigator({
  screens: {
    Entries: EntriesStack,
    Categories: CategoriesScreen,
  },
});

const Navigation = createStaticNavigation(BottomTabs);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
