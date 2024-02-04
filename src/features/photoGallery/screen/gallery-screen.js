import React, { useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";

//import { ActivityIndicator, Colors } from "react-native-paper";

import { PhotoInfoCard } from "../component/photo-info-card.component";
import { theme } from "../../../infrastructure/theme/index";

const photos = [
  {
    id: "e1",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e2",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e3",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e4",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e5",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e6",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e7",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e8",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
  {
    id: "e9",
    description: "Some photo",
    photos: [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?b=1&s=170667a&w=0&k=20&c=CPj_nQCf9Q5B9MJEYkuLxr8ycejYbWr6JlTpgQdxBdo=",
      "https://media.istockphoto.com/id/1084251084/photo/personal-weight-training-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=MuGitA7NEZnauCllbGq9fBc-LymyWi3Ele3sgxReiSM=",
    ],
    date: "2022-02-18",
  },
];

export const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => {
          return <PhotoInfoCard photo={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary, //"#2d0689",
  },
  spacer: {
    //margin: theme.spaceInNumber[1],
  },
});
