import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { startOfMonth, eachDayOfInterval, addMonths, format } from "date-fns";

import { CalendarItem } from "../../Calendar/component/calendar-Item.component";
import { theme } from "../../../infrastructure/theme";
import PageTitle from "../../../components/utility/PageTitle";
import { getFormattedDate } from "../../../utils/date";
import TransparentMenu from "./TransparentMenu";
import PageContainer from "../../../components/utility/PageContainer";
import HeaderLogo from "../../../components/utility/HeaderLogo";

const CalendarScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleSelectMenuItem = (menuItem) => {
    console.log(`Pressed ${menuItem.text}`); // Access the text property of the selected item
    setMenuVisible(false);
    setSelectedMenuItem(menuItem);
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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <HeaderLogo
          style={{
            marginLeft: 150,
            marginTop: StatusBar.currentHeight,
          }}
        />
      ),
    });
  }, []);

  return (
    <PageContainer style={styles.container}>
      {/*  <View style={styles.calendarContainer}> */}
      <PageTitle
        title="Calendar"
        style={styles.pageTitle}
        textStyle={styles.pageTitleColor}
      />
      <View style={styles.divider}></View>
      <FlatList
        data={dates}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <CalendarItem
                date={item}
                selectedMenuItem={selectedMenuItem}
                selectedDate={selectedItem}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
        initialScrollIndex={startIndex}
        getItemLayout={(data, index) => ({
          length: theme.spaceInNumber[3] + theme.spaceInNumber[1] + 50, // Adjust this based on your item height
          offset:
            (theme.spaceInNumber[3] + theme.spaceInNumber[1] + 50) * index,
          index,
        })}
      />
      <TransparentMenu
        isVisible={isMenuVisible}
        onClose={handleCloseMenu}
        selectedItem={selectedItem}
        onSelectedMenuItem={handleSelectMenuItem}
      />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: theme.colors.ui.primary,
  },

  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pageTitle: {
    backgroundColor: theme.colors.ui.quaternary,
  },
  pageTitleColor: {
    color: theme.colors.text.fiftary,
  },
  divider: {
    backgroundColor: theme.colors.ui.accent2,
    padding: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    elevation: 3,
    shadowColor: theme.colors.ui.quaternary, // "#39324a", // GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});

export default CalendarScreen;
