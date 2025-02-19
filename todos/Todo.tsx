import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React from "react";
import { TodoEntity } from "./TodoEntity";

export default function Todo() {
  const [todoList, setTodoList] = React.useState([] as TodoEntity[]);
  const [todo, setTodo] = React.useState("");
  const onAddTodo = () => {
    const newTodo = new TodoEntity(todoList.length, todo);
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
  };

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>To Do</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTodo}
        value={todo}
        placeholder="useless placeholder"
      />

      <Button
        onPress={onAddTodo}
        title="Add todo"
        color="#841584"
        accessibilityLabel="Add todo"
      />
      <FlatList
        data={todoList}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ flexGrow: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "honeydew",
    backgroundColor: "cornflowerblue",
    padding: 10,
    marginBottom: 5,
  },
});
