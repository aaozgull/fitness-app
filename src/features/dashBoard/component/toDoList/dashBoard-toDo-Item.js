import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

//import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../../../utils/date";
import Checkbox from "expo-checkbox";

function ToDoItem({ description, amount, date }) {
  const [isChecked, setChecked] = useState(false);
  console.log(`description  ${description}   date  ${date}`);
  function setCheckBox() {
    setChecked(!isChecked);
  }
  return (
    <Pressable>
      <View style={styles.toDoItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          {/*  <Text style={styles.textBase}>{getFormattedDate(date)}</Text> */}
        </View>
        <View style={styles.amountContainer}>
          {/*  <Text style={styles.amount}>{amount.toFixed(2)}</Text> */}
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setCheckBox}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default ToDoItem;

const styles = StyleSheet.create({
  toDoItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#3e04c3", //GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "#e4d9fd", //GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    padding: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: "#3e04c3", //GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  checkbox: {
    margin: 8,
  },
});
