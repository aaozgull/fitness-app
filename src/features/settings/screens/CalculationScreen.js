import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../../infrastructure/theme/colors";
import PageContainer from "../../../components/utility/PageContainer";
import PageTitle from "../../../components/utility/PageTitle";
import SubmitButton from "../../../components/utility/SubmitButton";

const CalculationScreen = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const calculateBmi = () => {
    if (weight && height) {
      const weightKg =
        weightUnit === "kg" ? parseFloat(weight) : parseFloat(weight) / 2.20462;
      const heightM =
        heightUnit === "cm"
          ? parseFloat(height) / 100
          : parseFloat(height) * 0.0254;
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi(null);
    }
  };

  const getBmiMeaning = () => {
    if (bmi !== null) {
      if (bmi < 18.5) {
        return {
          message:
            " You are underweight. Consider consulting a doctor or a nutritionist",
          color: `${colors.ui.error500}`,
        };
      } else if (bmi < 24.9) {
        return {
          message: "Congratulation ! You are in a healthy weight range",
          color: `${colors.ui.tertiary}`,
        };
      } else if (bmi < 29.9) {
        return {
          message: "You are overweight ! Consider adopting a healthy diet",
          color: `${colors.ui.accent}`,
        };
      } else {
        return {
          message:
            "You are obese. Please consider consulting a healthcare professional",
          color: `${colors.ui.error500}`,
        };
      }
    }
  };

  const bmiMessage = getBmiMeaning();

  return (
    <PageContainer style={{ paddingHorizontal: 20 }}>
      <PageTitle text="BMI Calculator" />

      <View style={styles.unitsContainer}>
        <Text style={styles.unitsText}>Weight Unit</Text>
        <Text style={styles.unitsText}>Height Unit</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={weightUnit}
          onValueChange={(value) => setWeightUnit(value)}
        >
          <Picker.Item label="Kg" value="kg" />
          <Picker.Item label="Pounds" value="lbs" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={heightUnit}
          onValueChange={(value) => setHeightUnit(value)}
        >
          <Picker.Item label="Cm" value="cm" />
          <Picker.Item label="Inches" value="in" />
        </Picker>
      </View>
      <TextInput
        placeholder={`Enter your weight in ${weightUnit}`}
        keyboardType="numeric"
        onChangeText={(text) => setWeight(text)}
        value={weight}
        style={styles.textInput}
      />
      <TextInput
        placeholder={`Enter your height in ${heightUnit}`}
        keyboardType="numeric"
        onChangeText={(text) => setHeight(text)}
        value={height}
        style={styles.textInput}
      />
      <SubmitButton
        title="Calculate BMI"
        color={colors.ui.tertiary}
        onPress={calculateBmi}
      />

      {bmi !== null ? (
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#001F3F",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Text style={styles.unitsText}>
            Your BMI is : <Text style={{ fontSize: 24 }}>{bmi}</Text>
          </Text>

          <Text style={styles.bmiMessage}>{bmiMessage.message}</Text>
        </View>
      ) : null}
    </PageContainer>
  );
};

export default CalculationScreen;
const styles = StyleSheet.create({
  unitsText: {
    flex: 1,
    fontSize: 18,
    fontFamily: "bold",
    fontWeight: "bold",
    textAlign: "center",
  },
  unitsContainer: { flexDirection: "row", marginVertical: 5 },
  picker: { flex: 1, height: 50 },
  pickerContainer: { flexDirection: "row", marginBottom: 10 },
  textInput: {
    width: "70%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  bmiMessage: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: bmiMessage.color,
  },
});
