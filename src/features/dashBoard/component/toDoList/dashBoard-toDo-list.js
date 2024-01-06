import { FlatList, Text } from "react-native";

import ToDoItem from "../toDoList/dashBoard-toDo-Item";

function renderExpenseItem(itemData) {
  return <ToDoItem {...itemData.item} />;
  //return <Text>renderExpenseItem</Text>;
}

function ToDoList({ todos }) {
  return (
    <FlatList
      data={todos}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ToDoList;
