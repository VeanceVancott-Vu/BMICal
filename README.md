# ⚖️ BMI Calculator App

A modern, sleek, and intuitive **Body Mass Index (BMI) Calculator** mobile application built with **React Native**, **Expo Router**, and **TypeScript**. Designed with dynamic SVG circular visual indicators, clear health metrics display, and a modern dark theme interface.

---

## 🚀 Features

- ⚡ **Instant BMI Calculation**: Input height (in cm) and weight (in kg) to calculate your BMI immediately.
- 🎨 **SVG Circular Progress Gauge**: Dynamic visual feedback using `react-native-svg` showing your relative BMI score.
- 📊 **Health Category Classification**: Automatically categorizes results into:
  - 🔹 **Underweight**: BMI < 18.5
  - 🟢 **Normal**: 18.5 ≤ BMI < 25
  - 🟠 **Overweight**: 25 ≤ BMI < 30
  - 🔴 **Obese**: BMI ≥ 30
- 📱 **Modal Results Screen**: Sleek modal popup presenting the numeric BMI value and health classification.
- 🔄 **Re-Calculate Functionality**: Quick reset button to clear inputs and compute again seamlessly.
- 🌙 **Modern Dark Theme**: Styled with rich slate dark colors for high contrast and visual appeal.
- 💻 **Cross-Platform**: Operates smoothly on iOS, Android, and Web.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React Native](https://reactnative.dev/) (v0.81.5) with [Expo SDK 54](https://docs.expo.dev/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (v6)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Graphics**: `react-native-svg` (v15.12.1)
- **Styling**: React Native `StyleSheet` with flexbox layout & `KeyboardAvoidingView`

---

## 📂 Project Structure

```text
BMICalculator/
├── app/
│   └── index.tsx          # Main entry screen with input fields, calculation logic & result modal
├── components/
│   └── CircleProgress.tsx # Custom SVG circular progress indicator component
├── assets/                # App icons, splash screen, and static images
├── hooks/                 # Custom React hooks
├── constants/              # Application theme and color constants
├── app.json               # Expo project configuration
├── package.json           # Project dependencies & scripts
└── tsconfig.json          # TypeScript compiler configuration
```

---

## 📐 How BMI is Calculated

The Body Mass Index (BMI) formula used in the application is:

$$\text{BMI} = \frac{\text{Weight (kg)}}{\left(\frac{\text{Height (cm)}}{100}\right)^2}$$

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine along with Expo CLI or Expo Go app on your mobile device.

### 1. Clone the repository
```bash
git clone https://github.com/VeanceVancott-Vu/BMICal.git
cd BMICal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```
Or run specifically for your preferred platform:
```bash
# Start for Web
npm run web

# Start for Android
npm run android

# Start for iOS
npm run ios
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).