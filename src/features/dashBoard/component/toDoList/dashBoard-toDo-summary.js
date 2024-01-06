import { View, Text, StyleSheet, Pressable } from "react-native";

//import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../../../utils/date";
import { Ionicons } from "@expo/vector-icons";

function ToDoSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{getFormattedDate(new Date())}</Text>
      <View style={styles.sum}>
        <Pressable>
          <Ionicons
            name="caret-back-outline"
            size={24}
            color="black"
          ></Ionicons>
        </Pressable>
        <Pressable>
          <Ionicons
            name="caret-forward-outline"
            size={24}
            color="black"
          ></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}

export default ToDoSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#e4d9fd", // GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: "#5721d4", //GlobalStyles.colors.primary400,
  },
  sum: {
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e04c3", // GlobalStyles.colors.primary500,
  },
});
