import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { format } from "date-fns";

import { theme } from "../../../infrastructure/theme/index";
import {
  getFormattedDate,
  getDateMinusDays,
  getDatePlusDays,
} from "../../../utils/date";

export const CalendarItem = ({ date }) => {
  let displayDate = format(date, "MMM dd");
  const formattedDate = getFormattedDate(date);

  const currentDate = new Date();
  const formattedCurrentDate = getFormattedDate(currentDate);
  const formattedCurrentDatePrevious = getFormattedDate(
    getDateMinusDays(currentDate, 1)
  );
  const formattedCurrentDateTomorrow = getFormattedDate(
    getDatePlusDays(currentDate, 1)
  );

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

  function pressCalendarItemHandler() {}
  // console.log(`day ${date}`);
  let selectedStyle = date.toString().includes("Mon")
    ? styles.boldText
    : styles.dateText;

  selectedStyle = displayDate === "Today" ? styles.todayText : selectedStyle;
  return (
    <View style={styles.dateContainer}>
      <Text style={selectedStyle}>{format(date, "EEEE")}</Text>

      <Text style={selectedStyle}>{displayDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    padding: theme.spaceInNumber[3], // 12,
    marginVertical: theme.spaceInNumber[2], //8,
    backgroundColor: theme.colors.ui.secondary, //"#3e04c3", //GlobalStyles.colors.primary500,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,

    borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.ui.gray500, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  boldText: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizesInNumber.title, //16,
    fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.text.primary,
  },
  todayText: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizesInNumber.h5, //16,
    fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.text.primary,
  },
  dateText: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizesInNumber.body, //16,
    fontWeight: `${theme.fontWeights.regular}`,
    color: theme.colors.text.primary,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
