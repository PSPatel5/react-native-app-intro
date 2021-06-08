# React Native App Intro

![React Native App Intro License](https://img.shields.io/github/license/Parth-coditas/react-native-app-intro)
![React Native App Intro Version](https://img.shields.io/badge/version-v1.0.0-blue)
![React Native App Intro Release](https://img.shields.io/badge/release-june-yellow)
![React Native App Intro Top Language](https://img.shields.io/github/languages/top/Parth-coditas/react-native-app-intro)
![React Native App Intro TypeScript](https://img.shields.io/badge/language-ts-blue)

This project is a [React Native](https://facebook.github.io/react-native/) onboarding library that can be used to beautify user onboarding experience.

The library is completely written in typescript and highly customizable.

## Library Highlights

Some of the key highlights of this library is as below:

- Beautiful pagination animations.
- Custom pagination component support.
- Completely written in typescript.
- Cross-platform support.
- Highly customizable.

## Properties

##### Interfaces

```typescript
// page indicator animation whlie changing screen.
type animationType =
  | "sliding-border"
  | "sliding-dot"
  | "scaling-dot"
  | "expanding";

// Pagination component props
interface PaginationProps {
  activeDotColor?: string;
  inactiveDotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  animationType?: animationType;
  dotStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  activeDotStyle?: StyleProp<ViewStyle>;
}

// Bottom Button Props
interface BottomProps {
  showSkipButton?: boolean;
  skipButtonText?: string;
  nextButtonText?: string;
  skipTextStyle?: StyleProp<TextStyle>;
  nextTextStyle?: StyleProp<TextStyle>;
  skipContainerStyle?: StyleProp<ViewStyle>;
  nextContainerStyle?: StyleProp<ViewStyle>;
  onSkipPress?: () => void;
  onNextPress?: (activeIndex: number, nextIndex: number) => void;
  onDonePress?: () => void;
}

// Page Component Props
interface PageProps {
  title: string;
  image: ImageSourcePropType;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
}
```

|  Property Name   |                                     Expected Type                                      | Default Value | Required |
| :--------------: | :------------------------------------------------------------------------------------: | :-----------: | :------: |
|  showPagination  |                                        boolean                                         |     false     |  false   |
| paginationProps  | [Pagination Props](https://github.com/Parth-coditas/react-native-app-intro#interfaces) |   undefined   |  false   |
|   buttonProps    |   [Bottom Props](https://github.com/Parth-coditas/react-native-app-intro#interfaces)   |   undefined   |  false   |
| renderPagination |                ( activeIndex:number , totalSlides:number ) => ReactNode                |   undefined   |  false   |
|  onSlideChange   |                   (currentIndex: number, prevIndex: number) => void                    |   undefined   |  false   |

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
      <IntroSlider.Page
        title={"Any Title"}
        image={require("./path-to-image")}
        desciption={"screen description"}
        // Read more about supported props in interfaces section
      />
      <Screen title={"Screen 2"} />
      <Screen title={"Screen 3"} />
    </IntroSlider>
  );
};
```

## Roadmap

- Add a permission based component and function.
- Add an option to render custom skip and next button component.
- Add output screenshots/gif(s).
- Expose goToSlide method to end developers.
