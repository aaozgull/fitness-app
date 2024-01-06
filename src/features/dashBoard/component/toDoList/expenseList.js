import { FlatList, Text } from "react-native";

//import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  // return <ExpenseItem {...itemData.item} />;
  return <Text>render Expense Item</Text>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
