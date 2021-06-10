# React Native App Intro

![React Native App Intro License](https://img.shields.io/github/license/Parth-coditas/react-native-app-intro)
![React Native App Intro Version](https://img.shields.io/badge/version-v1.1.0-blue)
![React Native App Intro Release](https://img.shields.io/badge/release-june-yellow)
![React Native App Intro Top Language](https://img.shields.io/github/languages/top/Parth-coditas/react-native-app-intro)
![React Native App Intro TypeScript](https://img.shields.io/badge/language-ts-blue)

This project is a [React Native](https://facebook.github.io/react-native/) onboarding library that can be used to beautify user onboarding experience.

The library is completely written in typescript and highly customizable.

## Demo

|                                                                                 Expand                                                                                  |                                                                               Scale Dot                                                                               |                                                                               Slide Dot                                                                               |                                                                                Slide Border                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/Parth-coditas/react-native-app-intro/main/.github/Expand%20animation.gif" height="550" width="600" alt="Expand Animation"/> | <img src="https://raw.githubusercontent.com/Parth-coditas/react-native-app-intro/main/.github/Scaling%20Dot.gif" height="550" width="600" alt="Scale dot Animation"/> | <img src="https://raw.githubusercontent.com/Parth-coditas/react-native-app-intro/main/.github/Sliding%20Dot.gif" height="550" width="600" alt="Slide dot Animation"/> | <img src="https://raw.githubusercontent.com/Parth-coditas/react-native-app-intro/main/.github/Sliding%20Border.gif" height="550" width="600" alt="Slide border Animation"/> |

## Library Highlights

Some of the key highlights of this library is as below:

- Beautiful pagination animations.
- Custom pagination component support.
- Custom Next and Skip button component support.
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

interface renderSkipButtonProps {
  activeIndex: number;
  totalSlides: number;
  goToSlide: (slideNumber: number) => void;
  onSkipPress: () => void; // same function that you sent via BottomProps
}

interface renderNextButtonProps {
  activeIndex: number;
  totalSlides: number;
  goToSlide: (slideNumber: number) => void;
  isLastPage: boolean;
  onNextPress: (activeIndex: number, nextIndex: number) => void; // same function that you sent via BottomProps
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
  bottomContainerStyle?: StyleProp<ViewStyle>;
  onSkipPress?: () => void;
  onNextPress?: (activeIndex: number, nextIndex: number) => void;
  onDonePress?: () => void;
  renderSkipButton?: (props: renderSkipButtonProps) => ReactNode; // To render custom Skip button. Refer RenderSkipButtonProps Interface above for further details.
  renderNextButton?: (props: renderNextButtonProps) => ReactNode; // To render custom Next button. Refer RenderNextButtonProps Interface above for further details.
}

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
