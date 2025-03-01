import { View, Text, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

function EntryList() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Your entries</Text>
      <Button
        title="Edit this entry"
        onPress={() => navigation.navigate("EditEntry")}
      />
    </View>
  );
}

export default EntryList;
