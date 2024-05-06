import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";
import SubmitButton from "../../../components/utility/SubmitButton";
import { colors } from "../../../infrastructure/theme/colors";
import { Divider } from "react-native-paper";

const ReadBooksScreen = (props) => {
  function continueHandler() {
    // dispatch(setIsNewRegistration());
  }
  return (
    <PageContainer style={styles.container}>
      <View>
        First day of the streak. Well Done!
        <Divider />
      </View>
      <View style={styles.icon}>
        <FontAwesome5 name="books" size={54} color="white" />
      </View>
      <PageTitle text="Read Before Bed" />

      <Text style={styles.text}>Schedualed</Text>
      <View style={styles.buttonContainer}>
        <SubmitButton
          title="COMPLETE"
          onPress={continueHandler}
          style={{ marginTop: 20 }}
          color={colors.ui.accent}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    marginTop: 150,
  },

  icon: {
    marginTop: 100,
    borderRadius: 50,
    borderColor: colors.ui.accent,
    borderWidth: 15,
    //backgroundColor: colors.ui.accent2,

    padding: 10,
    borderWidth: 2,
    borderStyle: "solid",
  },
  text: {
    fontFamily: "bold",
    fontSize: 22,
    letterSpacing: 0.5,
    color: colors.text.primary,
  },
  buttonContainer: {
    marginBottom: 20,
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
  },
});

export default ReadBooksScreen;
