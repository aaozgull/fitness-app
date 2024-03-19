import { useEffect, useState } from "react";
import { Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";

const RestScreen = ({ navigation }) => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(2);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();

    //Cleanup Function
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView>
      <PageContainer style={{ paddingHorizontal: 20 }}>
        <PageTitle text="Rest" />
        <Image
          // resizeMode="contain"
          source={{
            uri: "https://www.freepik.com/free-photo/men-women-stand-drink-water-after-exercise_8351940.htm#fromView=search&page=1&position=0&uuid=f7c06a8b-4dc8-43b7-bd3d-89755fb73ed6",
          }}
          style={styles.image}
        />

        <Text style={styles.text}>TAKE A BREAK!</Text>

        <Text style={styles.text}>
          <MaterialIcons name="timer" size={26} color="black" /> {timeLeft}
        </Text>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: "900",
    marginTop: 50,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 420,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default RestScreen;
