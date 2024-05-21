import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import { format } from "date-fns";

import MenuItems from "../component/menu-items.component";
import SubMenuItems from "../component/sub-menu-items.component"; // New sub-menu component

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../infrastructure/theme";

const TransparentMenu = ({
  isVisible,
  onClose,
  selectedItem,
  onSelectedMenuItem,
}) => {
  const formattedDate = selectedItem ? format(selectedItem, "MMM dd") : "";
  const [selectedItemText, setSelectedItemText] = useState(null); // State to track the selected item text
  const navigation = useNavigation();

  const handleSelectMenuItem = (menuItem) => {
    onClose(); // Close the menu
    setSelectedItemText(menuItem.text); // Set the selected item text
    console.log(`handleSelecMenu ${menuItem.text} ${selectedItemText}`);
    onSelectedMenuItem(menuItem); // Pass the selected menu item to the parent component
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <PageTitle title={formattedDate} textStyle={styles.menuHeaderText} />

        <MenuItems onSelectedMenuItem={handleSelectMenuItem} />
        {/* Conditional rendering of sub-menu */}
        {console.log(
          `isVisible ${isVisible} selectedItemText ${selectedItemText}`
        )}

        {selectedItemText === "Activity" && (
          <SubMenuItems
            isVisible={isVisible}
            onClose={onClose}
            onSelectedMenuItem={handleSelectMenuItem}
            /*  onSelectedMenuItem={(item) => {
              onClose(); // Close the sub-menu after selecting an item
              // navigation.navigate(item.screen); // Navigate to the specified screen
            }}
 */
          />
        )}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.ui.accent2, //"rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: theme.lineHeightsInNumber.copy, //20,
    alignItems: "flex-start",
    justifyContent: "center",
    // margin: theme.lineHeightsInNumber.copy, //20,
    // opacity: 0.5,
  },
  menuHeader: {
    marginBottom: theme.spaceInNumber[3],
    //
  },
  menuHeaderText: {
    fontFamily: "blackItalic",
    letterSpacing: 0.3,
    //fontSize: theme.fontSizesInNumber.title, //18,
    // fontWeight: `${theme.fontWeights.bold}`,
    // color: theme.colors.text.fiftary, //"#333", // Adjust the color as needed
  },

  closeButton: {
    position: "absolute",
    top: 5,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.ui.accent, // "#2196F3", // Adjust the color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: theme.colors.ui.error50, //"#fff", // Adjust the color as needed
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default TransparentMenu;
