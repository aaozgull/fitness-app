import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//import { FontAwesome5 } from "@expo/vector-icons"; // You can use a different icon library
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons"; // Import the required icon components

import { theme } from "../../../infrastructure/theme";
import Modal from "react-native-modal";

const SubMenuItems = ({ isVisible, onClose, onSelectedMenuItem }) => {
  const subMenuItemsValue = [
    { name: "running", text: "Running", icon: Ionicons },
    { name: "walk", text: "Walking", icon: Ionicons },
    { name: "bicycle", text: "Cycing", icon: Ionicons },
    { name: "rowing", text: "Rowing", icon: MaterialIcons },
    { name: "camera", text: "Elliptical", icon: Ionicons },
    {
      name: "stairs-up",
      text: "Stair climbing",
      icon: MaterialCommunityIcons,
    },
    {
      name: "american-football-outline",
      text: "American football",
      icon: Ionicons,
    },
    /* <MaterialCommunityIcons name="football-australian" size={24} color="black" /> */
    /*  { name: "football", text: "Australian football", icon: Ionicons },
    { name: "badminton", text: "Badminton", icon: MaterialCommunityIcons },
    { name: "baseball-bat-ball", text: "Baseball", icon: FontAwesome6 },
    { name: "basketball-outline", text: "Basketball", icon: Ionicons },
    { name: "sports-cricket", text: "Cricket", icon: MaterialIcons },
    { name: "dance-pole", text: "CrossFit", icon: MaterialCommunityIcons },
    { name: "dance-ballroom", text: "Dancing", icon: MaterialCommunityIcons },
    { name: "people-group", text: "Fitness Class", icon: FontAwesome6 },
    { name: "hiking", text: "Hiking", icon: "MaterialIcons " },
    { name: "weight-lifter", text: "HIIT", icon: MaterialCommunityIcons },
    { name: "sports-hockey", text: "Hockey", icon: MaterialIcons },
    { name: "jump-rope", text: "Jump rope", icon: MaterialCommunityIcons },
    { name: "utensils", text: "Paddling", icon: Ionicons },
    { name: "barbell", text: "Pilates", icon: Ionicons },
    { name: "rugby", text: "Rugby", icon: MaterialCommunityIcons },
    { name: "skiing", text: "Skiing", icon: FontAwesome5 },
    { name: "skiing-nordic", text: "Snowboarding", icon: FontAwesome5 },
 */
    /*<MaterialCommunityIcons name="ski-water" size={24} color="black" />
     <MaterialCommunityIcons name="handball" size={24} color="black" /> */
    /*   { name: "sports-tennis", text: "Squash", icon: MaterialIcons },
    { name: "baseball-outline", text: "Softball", icon: Ionicons },
    { name: "soccer-ball-o", text: "Soccer", icon: FontAwesome },
    { name: "person-swimming", text: "Swimming", icon: FontAwesome6 },
    { name: "sports-tennis", text: "Tennis", icon: MaterialIcons },
    {
      name: "table-tennis-paddle-ball",
      text: "Table Tennis",
      icon: FontAwesome6,
    }, */
  ];
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        {subMenuItemsValue.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => onSelectedMenuItem(item)}
          >
            <item.icon name={item.name} size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
    /* <View style={styles.menuContent}>
      {sabMenuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => onSelectedMenuItem(item)}
        >
          <item.icon
            name={item.name}
            size={24}
            //color="black"
            style={styles.menuItemIcon}
          />
          <Text style={styles.menuItemText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View> */
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.ui.accent2,
    borderRadius: 10,
    padding: theme.lineHeightsInNumber.copy,
    alignItems: "flex-start",
    justifyContent: "center",
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

export default SubMenuItems;
