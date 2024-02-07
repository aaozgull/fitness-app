import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // You can use a different icon library
import { theme } from "../../../infrastructure/theme";

const SubMenuItems = ({ onSelectedMenuItem }) => {
  const sabMenuItems = [
    { icon: "dumbbell", text: "Workout" },
    { icon: "running", text: "Activity" },
    { icon: "utensils", text: "Meal" },
    { icon: "camera", text: "Photos" },
    { icon: "bed", text: "Sleep" },
    { icon: "user", text: "Body Stats" },
  ];
  return (
    <View style={styles.menuContent}>
      {sabMenuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => onSelectedMenuItem(item)}
        >
          <FontAwesome5
            name={item.icon}
            size={24}
            //color="black"
            style={styles.menuItemIcon}
          />
          <Text style={styles.menuItemText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContent: {
    marginBottom: theme.sizesInNumber[3], //20,
  },
  menuItem: {
    flexDirection: "row",
    //alignContent: "space-between",
    alignItems: "center",
    marginVertical: theme.sizesInNumber[2], // 10,
    padding: 5,
  },
  menuItemIcon: {
    width: 24,
    height: 24,
    marginRight: theme.sizesInNumber[3], // 10,
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
