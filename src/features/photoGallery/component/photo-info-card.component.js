import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const PhotoInfoCard = ({ photo = {} }) => {
  const {
    name = "Some photo",
    photos = [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
    ],
    date = "2022-02-18",
  } = photo;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
