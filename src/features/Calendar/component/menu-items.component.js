import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // You can use a different icon library
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { theme } from "../../../infrastructure/theme";
import IconWithText from "../../../components/utility/IconWithText";

const MenuItems = ({ onSelectedMenuItem }) => {
  const navigation = useNavigation(); // Hook into navigation
  const menuItems = [
    {
      icon: "dumbbell",
      text: "Workout",
      screen: "Workout",
      subTitle: "Complete your scheduled workout",
      isChecked: false,
    },
    {
      icon: "running",
      text: "Activity",
      subTitle: "Complete your scheduled activities",
      isChecked: false,
    },
    {
      icon: "utensils",
      text: "Meal",
      screen: "Recipes",
      subTitle: "Hit your daily nutrition goal",
      isChecked: false,
    },
    {
      icon: "camera",
      text: "Photos",
      screen: "LogProgressScreen",
      isChecked: false,
    },
    { icon: "bed", text: "Sleep", isChecked: false },
    /* <FontAwesome6 name="glass-water" size={24} color="black" />
    <Fontisto name="photograph" size={24} color="black" />
    <MaterialCommunityIcons name="shoe-sneaker" size={24} color="black" />
     <FontAwesome6 name="weight-scale" size={24} color="black" /> 
     <MaterialCommunityIcons name="power-sleep" size={24} color="black" />
     <MaterialCommunityIcons name="sleep" size={24} color="black" />*/
    { icon: "user", text: "Body Stats", isChecked: false },
    {
      icon: "book",
      text: "read before sleep",
      screen: "ReadBooks",
      isChecked: false,
    },
  ];
  return (
    <View style={styles.menuContent}>
      {menuItems.map((item, index) => (
        <IconWithText
          text={item.text}
          icon={item.icon}
          key={index}
          /*  onPress={() => {
            onSelectedMenuItem(item);
            // item.screen ? navigation.navigate(item.screen) : null; // Navigate to the specified screen
          }} */
          onPressed={() => onSelectedMenuItem(item)}
          iconStyle={styles.menuItemIcon}
          textStyle={styles.menuItemText}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContent: {
    marginBottom: theme.sizesInNumber[3], //20,
  },
  menuItem: {
    /* flexDirection: "row",
    //alignContent: "space-between",
    alignItems: "center",
    marginVertical: theme.sizesInNumber[2], // 10,
    padding: 5, */
  },
  menuItemIcon: {
    width: 24,
    height: 24,
    marginRight: theme.sizesInNumber[4], // 10,
    color: theme.colors.ui.quaternary,
  },
  menuItemText: {
    fontFamily: "mediumItalic",
    letterSpacing: 0.3,
    fontSize: theme.fontSizesInNumber.title, //16,
    color: theme.colors.text.primary, //"#555", // Adjust the color as needed
  },
});

export default MenuItems;
