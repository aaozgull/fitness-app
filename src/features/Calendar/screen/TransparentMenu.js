import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import { format } from "date-fns";

import MenuItems from "../component/menu-items.component";
import { theme } from "../../../infrastructure/theme";

const TransparentMenu = ({ isVisible, onClose, selectedItem }) => {
  const formattedDate = selectedItem ? format(selectedItem, "MMM dd") : "";

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuHeaderText}>{formattedDate}</Text>
        </View>
        <MenuItems />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.ui.secondary, //"rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: theme.lineHeightsInNumber.copy, //20,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: theme.lineHeightsInNumber.copy, //20,
    // opacity: 0.9,
  },
  menuHeader: {
    marginBottom: theme.spaceInNumber[3],
    //
  },
  menuHeaderText: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizesInNumber.title, //18,
    fontWeight: `${theme.fontWeights.bold}`,
    color: theme.colors.text.primary, //"#333", // Adjust the color as needed
  },

  closeButton: {
    position: "absolute",
    top: 5,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.ui.error500, // "#2196F3", // Adjust the color as needed
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
