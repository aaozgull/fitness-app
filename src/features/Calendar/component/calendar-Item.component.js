import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { format } from "date-fns";

import { theme } from "../../../infrastructure/theme/index";
import {
  getFormattedDate,
  getDateMinusDays,
  getDatePlusDays,
} from "../../../utils/date";
import ToDoItem from "../../dashBoard/component/toDoList/dashBoard-toDo-Item";

export const CalendarItem = ({ date, selectedMenuItems, selectedDate }) => {
  let displayDate = format(date, "MMM dd");
  const formattedDate = getFormattedDate(date);
  const formattedSelectedDate = selectedDate && getFormattedDate(selectedDate);
  const currentDate = new Date();
  const formattedCurrentDate = getFormattedDate(currentDate);
  const formattedCurrentDatePrevious = getFormattedDate(
    getDateMinusDays(currentDate, 1)
  );
  const formattedCurrentDateTomorrow = getFormattedDate(
    getDatePlusDays(currentDate, 1)
  );
  if (formattedDate === formattedSelectedDate) {
    console.log(
      `formattedSelectedDate  ${formattedDate} ${formattedSelectedDate}`
    );
    if (selectedMenuItems) {
      selectedMenuItems.map((menuItem, index) =>
        console.log(`menuItem ${menuItem} index ${index}`)
      );
    }
  }

  // console.log(`${formattedCurrentDate} ee  date  ${formattedDate}`);
  if (formattedDate === formattedCurrentDate) {
    displayDate = "Today";
  }
  if (formattedCurrentDatePrevious === formattedDate) {
    displayDate = "Yesterday";
  }
  if (formattedCurrentDateTomorrow === formattedDate) {
    displayDate = "Tomorrow";
  }

  let selectedStyle =
    date.toString().includes("Mon") || displayDate.includes("Tom")
      ? styles.boldText
      : styles.dateText;

  selectedStyle = displayDate === "Today" ? styles.todayText : selectedStyle;
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={selectedStyle}>{format(date, "EEEE")}</Text>

        <Text style={selectedStyle}>{displayDate}</Text>
      </View>
      {selectedMenuItems &&
        formattedDate === formattedSelectedDate &&
        selectedMenuItems.map((menuItem, index) => (
          <ToDoItem
            key={index}
            description={menuItem.text}
            icon={menuItem.icon}
            style={styles.toDoItem}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spaceInNumber[1], //8,
    backgroundColor: theme.colors.ui.secondary, //"#3e04c3", //GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 5,
    shadowColor: theme.colors.ui.accent, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 6,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  dateContainer: {
    padding: theme.spaceInNumber[3],
    backgroundColor: theme.colors.ui.secondary, //"#3e04c3", //GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toDoItem: {
    //padding: theme.spaceInNumber[2], // 12,
    marginLeft: theme.spaceInNumber[3], //8,
    backgroundColor: theme.colors.ui.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    /* borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.ui.gray700, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4, */
  },
  selectedMenuItemText: {
    fontFamily: "regular",
    letterSpacing: 0.3,
    fontSize: theme.fontSizesInNumber.body,
    fontWeight: `${theme.fontWeights.regular}`,
    color: theme.colors.text.accent,
    backgroundColor: theme.colors.ui.secondary,
  },
  boldText: {
    fontFamily: "boldItalic", // theme.fonts.heading,
    letterSpacing: 0.3,
    // fontSize: theme.fontSizesInNumber.title, //16,
    ///fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.text.primary,
  },
  todayText: {
    fontFamily: "blackItalic", //theme.fonts.heading,
    letterSpacing: 0.3,

    fontSize: theme.fontSizesInNumber.title, //16,
    // fontSize: theme.fontSizesInNumber.h5, //16,
    // fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.text.accent,
  },
  dateText: {
    fontFamily: "regular", //theme.fonts.body,
    letterSpacing: 0.3,
    fontSize: theme.fontSizesInNumber.body, //16,
    fontWeight: `${theme.fontWeights.regular}`,
    color: theme.colors.text.primary,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
