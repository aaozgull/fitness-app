import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";
import ProfileImage from "../../../components/utility/ProfileImage";
import SubmitButton from "../../../components/utility/SubmitButton";
import { colors } from "../../../infrastructure/theme/colors";
import ProfilePic from "../../../../assets/images/ProfilePic2.jpg";

const ProfilePictureScreen = (props) => {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <PageContainer style={styles.container}>
      <ProfileImage
        size={250}
        userId={userData.userId}
        uri={ProfilePic}
        showEditButton={true}
        editIconContainerStyle={styles.editIconContainer}
        editSize={25}
      />
      <View style={styles.icon}>
        <Ionicons name="camera" size={54} color="white" />
      </View>
      <PageTitle text="Let's take a profile picture" />
      <Text style={styles.text}>
        Let's personalize your account with your with your own profile picture
        so your trainer can see you.
      </Text>
      <View style={{ marginTop: 20 }}>
        <SubmitButton
          title="CONTINUE"
          onPress={() => props.navigation.navigate("SetupCalendar")}
          style={{ marginTop: 20 }}
          color={colors.ui.accent}
        />
        <SubmitButton
          title="Skip This For Now"
          onPress={() => props.navigation.navigate("SetupCalendar")}
          style={{ marginTop: 20 }}
          color={colors.bg.primary}
          textColor={colors.ui.accent2}
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    marginTop: 100,
  },
  editIconContainer: {
    backgroundColor: colors.ui.primary,
  },
  icon: {
    marginTop: 60,
    borderRadius: 50,
    borderColor: colors.ui.accent2,
    borderWidth: 15,
    backgroundColor: colors.ui.accent2,
  },
  text: {
    fontFamily: "medium",
    fontSize: 16,
    letterSpacing: 0.3,
    color: colors.text.primary,
  },
});

export default ProfilePictureScreen;
