import EntryDelete from "./screens/EntryDelete";
import EntryEdit from "./screens/EntryEdit";
import EntryList from "./screens/EntryList";
import CategoriesScreen from "./screens/CategoriesScreen";

import { CategoryProvider } from "./context/CategoryContext";

import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
    <CategoryProvider>
      <Navigation />
    </CategoryProvider>
  );
}
