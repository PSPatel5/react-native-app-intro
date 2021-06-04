# React Native App Intro

![React Native App Intro License](https://img.shields.io/github/license/Parth-coditas/react-native-app-intro)
![React Native App Intro Version](https://img.shields.io/badge/version-v1.0.0-blue)
![React Native App Intro Release](https://img.shields.io/badge/release-june-yellow)
![React Native App Intro Top Language](https://img.shields.io/github/languages/top/Parth-coditas/react-native-app-intro)
![React Native Boilerplate TypeScript](https://img.shields.io/badge/language-ts-blue)

This project is a [React Native](https://facebook.github.io/react-native/) onboarding library that can be used to beautify user onboarding experience.

The library is completely written in typescript and highly customizable.

## Library Highlights

Some of the key highlights of this library is as below:

- Beautiful pagination animations.
- Custom pagination component support.
- Completely written in typescript.
- Cross-platform support.
- Highly customizable.

## Start

To add this library, simply run :

```bash
$ npm install @pspatel/react-native-app-intro
```

or

```bash
$ yarn add @pspatel/react-native-app-intro
```

## Usage

```javascript
import React from "react";
import { View, Text } from "react-native";
import { IntroSlider } from "@pspatel/react-native-app-intro";

const Screen = ({ title }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <IntroSlider
      showPagination
      buttonProps={{
        showSkipButton: true,
      }}
    >
      <Screen title={"Screen 1"} />
      <Screen title={"Screen 2"} />
      <Screen title={"Screen 3"} />
      <Screen title={"Screen 4"} />
      <Screen title={"Screen 5"} />
    </IntroSlider>
  );
};
```

## Roadmap

- Add a minimal predefined component for quick use.
- Add a permission based component and function.
- Add an option to render custom skip and next button component.
- Add example directory.
- Add output screenshots/gif(s).
- Expose goToSlide method to end developers.
