import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface BottomProps {
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

export type animationType =
  | "sliding-border"
  | "sliding-dot"
  | "scaling-dot"
  | "expanding";

export interface PaginationProps {
  activeDotColor?: string;
  inactiveDotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  animationType?: animationType;
  dotStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  activeDotStyle?: StyleProp<ViewStyle>;
}

export interface ExpandingProps extends PaginationProps {
  slides: Array<Object>;
  activeIndex?: number;
  scrollX: any;
}

export interface SlidingDotProps extends PaginationProps {
  slides: Array<Object>;
  activeIndex?: number;
  scrollX: any;
}

export interface SlidingBorderProps extends PaginationProps {
  activeIndex?: number;
  slides: Array<Object>;
  scrollX: Animated.Value;
  borderPadding?: number;
  borderWidth?: number;
}

export interface ScalingDotProps extends PaginationProps {
  slides: Array<Object>;
  scrollX: Animated.Value;
  inactiveDotOpacity?: number;
  inactiveDotColor?: string;
  activeDotScale?: number;
  activeDotColor?: string;
}
