import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
//import { GlobalStyles } from "../../constants/styles";
import { theme } from "../../../../infrastructure/theme";

function Heading({ title }) {
  // console.log(`title ${title}`);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.dividerContainer}>
        <Divider bold="true" style={styles.divider} />
      </View>
    </View>
  );
}

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: theme.spaceInNumber[4], //16,
  },
  heading: {
    color: theme.colors.ui.primary50,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizesInNumber.title, //16,
  },
  dividerContainer: {
    paddingTop: theme.spaceInNumber[3],
    //backgroundColor: theme.colors.ui.error500,
    backgroundColor: theme.colors.bg.primary,
  },
  divider: {
    // fontSize: 20,
    // fontWeight: "bold",
    // color: "#e4d9fd",

    color: theme.colors.ui.primary50,
    //fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizesInNumber.title,
  },
});
