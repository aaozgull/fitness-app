import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";
import SubmitButton from "../../../components/utility/SubmitButton";
import { colors } from "../../../infrastructure/theme/colors";
import { createCalendar } from "../../../utils/actions/calendarActions";
import { setIsNewRegistration } from "../../../store/authSlice";

const CalendarSetupScreen = (props) => {
  const userData = useSelector((state) => state.auth.userData);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const dispatch = useDispatch();
  useEffect(() => {
    // Call createCalendar function when the component mounts
    const setupCalendar = async () => {
      try {
        // Perform calendar setup
        dispatch(createCalendar(userData.userId));
        // Once the setup is complete, set isLoading to false
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that occur during setup
        console.error("Error setting up calendar:", error);
        setIsLoading(false); // Ensure isLoading is set to false even in case of error
      }
    };

    // Call the setup function
    setupCalendar();
  }, [userData.userId]);

  // Render loading indicator while isLoading is true
  if (isLoading) {
    return (
      <PageContainer style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Setting up calendar...</Text>
      </PageContainer>
    );
  }
  function continueHandler() {
    dispatch(setIsNewRegistration());
  }
  return (
    <PageContainer style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="calendar-outline" size={54} color="white" />
      </View>
      <PageTitle text="Let's make a Calendar" />
      <Text style={styles.text}>Calendar setup complete!</Text>
      <View style={{ marginTop: 20 }}>
        <SubmitButton
          title="CONTINUE"
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
    marginTop: 100,
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

export default CalendarSetupScreen;
