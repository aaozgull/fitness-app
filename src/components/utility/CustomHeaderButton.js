import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
//import colors from '../constants/colors';
import { theme } from "../../infrastructure/theme/index";

const CustomHeaderButton = (props) => {
  const { iconType } = props;

  // Determine the appropriate icon component based on the specified icon type
  const IconComponent =
    iconType && iconType === "FontAwesome5" ? FontAwesome6 : Ionicons;

  return (
    <HeaderButton
      {...props}
      IconComponent={IconComponent}
      iconSize={props.size ? props.size : 23}
      color={props.color ?? theme.colors.ui.accent}
    />
  );
};

export default CustomHeaderButton;
