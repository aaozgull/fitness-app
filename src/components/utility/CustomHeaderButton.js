import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
//import colors from '../constants/colors';
import { theme } from "../../infrastructure/theme/index";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color ?? theme.colors.ui.primary}
    />
  );
};

export default CustomHeaderButton;