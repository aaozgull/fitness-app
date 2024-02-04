import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // You can use a different icon library
import { theme } from "../../../infrastructure/theme";

const MenuItems = () => {
  const menuItems = [
    { icon: "dumbbell", text: "Workout" },
    { icon: "running", text: "Activity" },
    { icon: "utensils", text: "Meal" },
    { icon: "camera", text: "Photos" },
    { icon: "bed", text: "Sleep" },
    { icon: "user", text: "Body Stats" },
  ];
  return (
    <View style={styles.menuContent}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => {
            // Handle item press as needed
            console.log(`Pressed ${item.text}`);
          }}
        >
          {/*  <Image
          source={{ uri: `https://example.com/${item.icon}.png` }} // Replace with your actual image URLs
          style={styles.menuItemIcon}
        /> */}
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
  },
  menuItemIcon: {
    width: 24,
    height: 24,
    marginRight: theme.sizesInNumber[3], // 10,
    color: theme.colors.ui.primary50,
  },
  menuItemText: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizesInNumber.body, //16,
    color: theme.colors.ui.primary50, //"#555", // Adjust the color as needed
  },
});

export default MenuItems;
