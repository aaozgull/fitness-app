import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

const SubmitButton = (props) => {
  const enabledBgColor = props.color || colors.ui.accent2;
  const disabledBgColor = colors.ui.grey300;
  const bgColor = props.disabled ? disabledBgColor : enabledBgColor;
  const textColor = props.disabled ? colors.ui.grey100 : "white";

  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        ...{ backgroundColor: bgColor },
      }}
    >
      <Text style={{ ...styles.text, ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // color: "white",
    fontFamily: "bold",
    fontSize: 24,
    letterSpacing: 0.3,
  },
});

export default SubmitButton;
