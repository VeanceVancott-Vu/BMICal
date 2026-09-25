import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CircleProgress from "../components/CircleProgress";

export default function App() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) return;

    const result = parseFloat((w / (h * h)).toFixed(1));
    setBmi(result);

    if (result < 18.5) setCategory("Underweight");
    else if (result < 25) setCategory("Normal");
    else if (result < 30) setCategory("Overweight");
    else setCategory("Obese");

    setModalVisible(true);
  };

  const reset = () => {
    setModalVisible(false);
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  const percentage = bmi ? Math.min((bmi / 40) * 100, 100) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.box}>
          <Text style={styles.title}>BMI CALCULATOR</Text>

          <TextInput
            style={styles.input}
            placeholder="Height (cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <TouchableOpacity style={styles.btn} onPress={calculateBMI}>
            <Text style={styles.btnText}>CALCULATE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                <View style={styles.circleWrapper}>
                    <CircleProgress percentage={percentage} radius={70} />
                    <Text style={styles.bmiValue}>{bmi}</Text>
                </View>

                <Text style={styles.category}>{category}</Text>

                <TouchableOpacity style={styles.reBtn} onPress={reset}>
                    <Text style={styles.btnText}>RE-CALCULATE</Text>
                </TouchableOpacity>

                </View>
            </View>
        </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  box: {
    padding: 24,
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#f43f5e",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  modalContainer: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.6)",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},

modalContent: {
  width: "100%",
  maxWidth: 380,
  backgroundColor: "#1e293b",
  borderRadius: 20,
  paddingVertical: 30,
  paddingHorizontal: 20,
  alignItems: "center",
},

circleWrapper: {
  justifyContent: "center",
  alignItems: "center",
  width: 160,
  height: 160,
},

bmiValue: {
  position: "absolute",
  fontSize: 36,
  color: "white",
  fontWeight: "bold",
},

category: {
  marginTop: 20,
  fontSize: 20,
  color: "#38bdf8",
  textAlign: "center",
},

reBtn: {
  backgroundColor: "#f43f5e",
  paddingVertical: 14,
  paddingHorizontal: 24,
  borderRadius: 10,
  marginTop: 30,
  width: "80%",
},
});
