import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { startOfMonth, eachDayOfInterval, addMonths, format } from "date-fns";

import { CalendarItem } from "../../Calendar/component/calendar-Item.component";
import { theme } from "../../../infrastructure/theme";
import PageTitle from "../../../components/utility/PageTitle";
import { getFormattedDate } from "../../../utils/date";
import TransparentMenu from "./TransparentMenu";

const CalendarScreen = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const currentDate = new Date();
  const dates = [];
  let indexFound = 0;
  let startIndex = 0;

  // Generate dates for one year before and after the current date
  for (let i = -1; i <= 2; i++) {
    const currentMonth = addMonths(currentDate, i);
    // console.log(`currentMonth ${currentMonth}`);
    // months.push(months);
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
    });
    daysInMonth.map((day) => {
      dates.push(day);
      const formattedDate = getFormattedDate(day);
      const formattedCurrentDate = getFormattedDate(currentDate);
      // console.log(`${formattedCurrentDate} ee  date  ${formattedDate}`);
      if (formattedDate === formattedCurrentDate) {
        console.log(`startIndex${startIndex} indexFound  ${indexFound}`);
        indexFound = 1;
      } else if (indexFound === 0) {
        startIndex++;
      }
    });
  }

  return (
    <View style={styles.container}>
      {/*  <View style={styles.calendarContainer}> */}
      <PageTitle title="Calendar" />
      <FlatList
        data={dates}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <CalendarItem date={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
        initialScrollIndex={startIndex}
        getItemLayout={(data, index) => ({
          length: theme.spaceInNumber[3] + theme.spaceInNumber[2] + 50, // Adjust this based on your item height
          offset:
            (theme.spaceInNumber[3] + theme.spaceInNumber[2] + 50) * index,
          index,
        })}
      />
      <TransparentMenu
        isVisible={isMenuVisible}
        onClose={handleCloseMenu}
        selectedItem={selectedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.ui.secondary,
  },

  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default CalendarScreen;
