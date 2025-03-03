import { View, Text, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

function EntryEdit() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Edit this entry</Text>
      <Button
        title="Delete this entry"
        onPress={() => navigation.navigate("DeleteEntry")}
      />
    </View>
  );
}

export default EntryEdit;
