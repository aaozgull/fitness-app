import React from "react";
import WebView from "react-native-webview";
import { View, Text, Platform, StyleSheet } from "react-native";

const isAndroid = Platform.OS === "android";

export const CompactWorkoutInfo = ({ workout }) => {
  const compactImage = isAndroid ? WebView : Image;

  return (
    <View style={styles.container}>
      <compactImage
        style={styles.compactViewStyle}
        source={{ uri: restaurant.photos[0] }}
      />
      <Text style={styles.caption} numberOfLines={3}>
        {restaurant.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
  compactViewStyle: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  caption: {
    textAlign: "center",
  },
});
