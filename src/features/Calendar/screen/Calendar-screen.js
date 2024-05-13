import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import {
  startOfMonth,
  eachDayOfInterval,
  endOfMonth,
  addMonths,
  format,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import { CalendarItem } from "../../Calendar/component/calendar-Item.component";
import { theme } from "../../../infrastructure/theme";
import PageTitle from "../../../components/utility/PageTitle";
import { getFormattedDate } from "../../../utils/date";
import TransparentMenu from "./TransparentMenu";
import PageContainer from "../../../components/utility/PageContainer";
import HeaderLogo from "../../../components/utility/HeaderLogo";
import { createCalendar } from "../../../utils/actions/calendarActions";

const CalendarScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const calendarData = useSelector((state) => state.calendar.calendarData);
  // console.log(`--------------- create Calendar`);
  //createCalendar(userData.userId);
  // console.log(`-------------end-- create Calendar`);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  // Display calendarData values
  // console.log("CalendarData:", calendarData);

  /* Object.entries(calendarData).map(([key, value]) =>
    console.log(`CalendarData ${key}:  ${value.date}`)
  ); */
  const currentDate = new Date();
  const dates = [];
  let indexFound = 0;
  let startIndex = 0;
  Object.entries(calendarData).map(([key, value]) => {
    const day = new Date(value.date);
    if (day instanceof Date && !isNaN(day)) {
      //console.log(` day ${day}`);
      dates.push(day);
      const formattedDate = getFormattedDate(day);
      const formattedCurrentDate = getFormattedDate(currentDate);
      //  console.log(`${formattedCurrentDate1} ee  date  ${formattedDate1}`);
      if (formattedDate === formattedCurrentDate) {
        console.log(`startIndex${startIndex} indexFound  ${indexFound}`);
        indexFound = 1;
      } else if (indexFound === 0) {
        startIndex++;
      }
    }
  });

  //console.log(`CalendarData ${Object.values(calendarData)}`);
  /*  useEffect(() => {
    calendarData.forEach((date, index) => {
      console.log(`Calendar Data index ${index} Pressed ${date}`);
    });
  }, [calendarData, selectedItem]); */

  const handleSelectMenuItem = (menuItem) => {
    console.log(`Pressed ${menuItem.text}`); // Access the text property of the selected item
    setMenuVisible(false);
    //setSelectedMenuItems(menuItem);
    setSelectedMenuItems((prevItems) => [...prevItems, menuItem]);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderLogo />,
    });
  }, []);

  const itemHeight =
    2 * theme.spaceInNumber[1] + // Vertical margin
    theme.spaceInNumber[3] + // Padding for dateContainer
    2 * theme.fontSizesInNumber.body + // Height of two Text components
    3 * theme.spaceInNumber[3] + // Padding for ToDoItem
    2 * theme.fontSizesInNumber.body; // Height of two Text components in ToDoItem

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
                selectedMenuItems={selectedMenuItems}
                selectedDate={selectedItem}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item}
        initialScrollIndex={startIndex > 10 ? startIndex - 10 : startIndex}
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
    //marginTop: 10,
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
    fontSize: 28,
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
