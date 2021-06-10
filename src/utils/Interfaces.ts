import { ReactNode } from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";

interface renderButtonProps {
  activeIndex: number;
  totalSlides: number;
  goToSlide: (slideNumber: number) => void;
}

interface renderSkipButtonProps extends renderButtonProps {
  onSkipPress: () => void;
}

interface renderNextButtonProps extends renderButtonProps {
  onNextPress: (activeIndex: number, nextIndex: number) => void;
  isLastPage: boolean;
}

export interface BottomProps {
  showSkipButton?: boolean;
  renderSkipButton?: (props: renderSkipButtonProps) => ReactNode;
  renderNextButton?: (props: renderNextButtonProps) => ReactNode;
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
