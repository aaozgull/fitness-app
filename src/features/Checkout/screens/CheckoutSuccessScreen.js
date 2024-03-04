import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Avatar } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
import PageContainer from "../../../components/utility/PageContainer";

const CheckoutSuccessScreen = () => {
  const { error = "" } = route.params;
  return (
    <PageContainer style={{ paddingHorizontal: 20 }}>
      <View style={styles.container}>
        <View style={styles.cartIconContainer}>
          <Avatar.Icon
            icon="check-bold"
            size={128}
            backgroundColor={colors.ui.primary}
          />
          <Text>Success!</Text>
        </View>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  cartIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarIcon: {
    backgroundColor: colors.ui.primary,
  },
  textInput: {
    margin: 12,
  },
  button: {
    margin: 20,
  },
  indicator: {
    position: absolute,
    top: "50%",
    left: "35%",
    zIndex: 999,
  },
});

export default CheckoutSuccessScreen;
