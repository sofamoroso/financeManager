import { StyleSheet, Button, View, Text } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function EntryEdit() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Edit this entry</Text>
    </View>
  );
}

export default EntryEdit;
