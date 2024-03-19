import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TimerScreen = () => {
  const [roundDuration, setRoundDuration] = useState(3);
  const [restDuration, setRestDuration] = useState(1);
  const [numberOfRounds, setNumberOfRounds] = useState(2);
  const [currentRound, setCurrentRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(roundDuration);
  const [isResting, setIsResting] = useState(false);

  const countDown = useRef(null);

  useEffect(() => {
    setTime(isResting ? restDuration : roundDuration);
  }, []);

  const startCountDown = () => {
    if (currentRound <= numberOfRounds) {
      setIsRunning(true);
      countDown.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(countDown.current);
            if (currentRound < numberOfRounds) {
              if (isResting) {
                setCurrentRound(currentRound + 1);
                setIsResting(false);
                return roundDuration;
              } else {
                setIsResting(true);
                return restDuration;
              }
            } else {
              setIsRunning(false);
              setIsResting(false);
              return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const pauseCountDown = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(countDown.current);
    }
  };

  const resetCountDown = () => {
    setCurrentRound(1);
    setIsResting(false);
    setIsRunning(false);
    clearInterval(countDown.current);
    setTime(roundDuration);
  };

  useEffect(() => {
    if (currentRound === numberOfRounds && time === 0) {
      clearInterval(countDown.current);
      setIsResting(false);
      setIsRunning(false);
      setTime(0);
      return;
    }

    if (isRunning && time === 0) {
      if (currentRound < numberOfRounds) {
        if (isResting) {
          setCurrentRound(currentRound + 1);
          setIsResting(false);
          setTime(roundDuration);
        } else {
          setIsResting(true);
          setTime(restDuration);
        }
      } else {
        setIsRunning(false);
        setIsResting(false);
        setTime(0);
      }
    }
  }, [isRunning, time]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isRunning
          ? isResting
            ? "Resting"
            : `Round ${currentRound}`
          : currentRound === 1 && time === roundDuration
            ? "Start"
            : currentRound === numberOfRounds && time === 0
              ? "Finished"
              : "Paused"}
      </Text>

      <Text
        style={styles.timer}
      >{`${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${time % 60}`}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={startCountDown}
          style={[styles.button, { backgroundColor: "green" }]}
          disabled={isRunning || currentRound > numberOfRounds}
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pauseCountDown}
          style={[styles.button, { backgroundColor: "red" }]}
          disabled={!isRunning}
        >
          <Text style={styles.buttonText}>PAUSE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resetCountDown}
          style={[styles.button, { backgroundColor: "blue" }]}
        >
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Round Duration (seconds)</Text>
        <TextInput
          style={styles.input}
          value={roundDuration.toString()}
          onChangeText={(text) => setRoundDuration(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
        <Text style={styles.inputLabel}>Rest Duration (seconds)</Text>
        <TextInput
          style={styles.input}
          value={restDuration.toString()}
          onChangeText={(text) => setRestDuration(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
        <Text style={styles.inputLabel}>Number of Rounds</Text>
        <TextInput
          style={styles.input}
          value={numberOfRounds.toString()}
          onChangeText={(text) => setNumberOfRounds(parseInt(text) || 0)}
          keyboardType="numeric"
          editable={!isRunning}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "30%",
    alignItems: "center",
    minHeight: "100%",
    backgroundColor: "#E5E7EB",
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    color: "#000",
  },
  timer: {
    fontSize: 24,
    color: "#000",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    marginTop: 32,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    width: 200,
  },
});
