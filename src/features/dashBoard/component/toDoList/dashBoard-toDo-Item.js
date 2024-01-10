import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../../infrastructure/theme/index";

//import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../../../utils/date";
import Checkbox from "expo-checkbox";

function ToDoItem({ description, amount, date }) {
  const [isChecked, setChecked] = useState(false);
  // console.log(`description  ${description}   date  ${date}`);
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
    padding: theme.space[3], // 12,
    marginVertical: theme.space[2], //8,
    backgroundColor: theme.colors.ui.primary500, //"#3e04c3", //GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.ui.gray500, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: theme.colors.ui.primary50, // "#e4d9fd", //GlobalStyles.colors.primary50,
  },
  description: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.body, //16,
    padding: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: theme.space[2], // 12,
    paddingVertical: theme.space[1], //4,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: theme.sizes[6], //80,
  },
  /*   amount: {
    color: theme.colors.ui.primary500, //"#3e04c3", //GlobalStyles.colors.primary500,
    fontWeight: "bold",
  }, */
  checkbox: {
    margin: theme.space[2], // 8,
  },
});
