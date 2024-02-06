import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../infrastructure/theme/index";

export default PageTitle = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    // backgroundColor: theme.colors.ui.primary,
  },
  text: {
    fontSize: 28,
    fontFamily: "bold", //theme.fonts.heading,
    // fontWeight: "bold",
    letterSpacing: 0.3,
  },
});
