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
        </View>
        <View style={styles.amountContainer}>
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
    padding: theme.spaceInNumber[2], // 12,
    marginVertical: theme.spaceInNumber[1], //8,
    backgroundColor: "white", //theme.colors.ui.primary500, //"#3e04c3", //GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.ui.gray700, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: theme.colors.text.primary, // "#e4d9fd", //GlobalStyles.colors.primary50,
  },
  description: {
    fontFamily: "regular",
    letterSpacing: 0.3,
    fontSize: theme.fontSizesInNumber.body, //16,
    padding: 4,
    // fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: theme.spaceInNumber[2], // 12,
    paddingVertical: theme.spaceInNumber[1], //4,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: theme.sizesInNumber[6], //80,
  },
  checkbox: {
    margin: theme.spaceInNumber[2], // 8,
  },
});
