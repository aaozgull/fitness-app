import { View, Text, StyleSheet } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";

//import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../../../utils/date";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Eat two eggs",
    amount: 59.99,
    date: new Date("2024-1-9"),
  },
  {
    id: "e2",
    description: "30 mins running",
    amount: 89.29,
    date: new Date("2024-1-9"),
  },
  {
    id: "e3",
    description: "Eat some bananas",
    amount: 5.99,
    date: new Date("2024-1-9"),
  },
  {
    id: "e4",
    description: "read a book",
    amount: 14.99,
    date: new Date("2024-1-8"),
  },
  {
    id: "e5",
    description: "read another book",
    amount: 18.59,
    date: new Date("2024-1-8"),
  },
  {
    id: "e6",
    description: "jogging",
    amount: 89.29,
    date: new Date("2024-1-8"),
  },
  {
    id: "e7",
    description: "eat some apples",
    amount: 5.99,
    date: new Date("2024-1-8"),
  },
  {
    id: "e8",
    description: "Exercise",
    amount: 14.99,
    date: new Date("2024-1-7"),
  },
  {
    id: "e9",
    description: "gym",
    amount: 18.59,
    date: new Date("2024-1-7"),
  },
  {
    id: "e10",
    description: "jogging",
    amount: 89.29,
    date: new Date("2024-1-7"),
  },
  {
    id: "e11",
    description: "eat some apples",
    amount: 5.99,
    date: new Date("2024-1-6"),
  },
  {
    id: "e12",
    description: "Exercise",
    amount: 14.99,
    date: new Date("2024-1-6"),
  },
  {
    id: "e13",
    description: "gym",
    amount: 18.59,
    date: new Date("2024-1-6"),
  },
  {
    id: "e14",
    description: "read a book",
    amount: 14.99,
    date: new Date("2024-1-6"),
  },
  {
    id: "e15",
    description: "read another book",
    amount: 18.59,
    date: new Date("2024-1-5"),
  },
  {
    id: "e16",
    description: "jogging",
    amount: 89.29,
    date: new Date("2024-1-5"),
  },
  {
    id: "e17",
    description: "eat some apples",
    amount: 5.99,
    date: new Date("2024-1-5"),
  },
  {
    id: "e18",
    description: "Exercise",
    amount: 14.99,
    date: new Date("2024-1-5"),
  },
  {
    id: "e19",
    description: "gym",
    amount: 18.59,
    date: new Date("2024-1-4"),
  },
  {
    id: "e20",
    description: "jogging",
    amount: 89.29,
    date: new Date("2024-1-3"),
  },
  {
    id: "e21",
    description: "eat some apples",
    amount: 5.99,
    date: new Date("2024-1-3"),
  },
];
function Gallery() {
  return (
    <MasonryFlashList
      data={DUMMY_EXPENSES}
      numColumns={2}
      renderItem={({ item }) => <Text>{item.description}</Text>}
      estimatedItemSize={200}
    />
  );
}

export default Gallery;
