import { Animated } from "react-native";
import { screenWidth, Colors } from "../../themes";

interface ExpandingAnimationProps {
  scrollX: Animated.Value;
  index: number;
  inactiveDotColor?: string;
  activeDotColor?: string;
  inactiveDotOpacity?: number;
  dotWidth?: number;
  expandingDotWidth?: number;
}

interface ScalingAnimationProps extends ExpandingAnimationProps {
  activeDotScale?: number;
}

export const getExpandingAnimations = ({
  scrollX,
  index,
  inactiveDotColor = Colors.transparentDark,
  activeDotColor = Colors.transparentBlack,
  inactiveDotOpacity = 0.5,
  dotWidth = 12,
  expandingDotWidth = dotWidth * 1.8,
}: ExpandingAnimationProps) => {
  const inputRange = [
    (index - 1) * screenWidth,
    index * screenWidth,
    (index + 1) * screenWidth,
  ];
  const colour = scrollX.interpolate({
    inputRange,
    outputRange: [inactiveDotColor, activeDotColor, inactiveDotColor],
    extrapolate: "clamp",
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [inactiveDotOpacity, 1, inactiveDotOpacity],
    extrapolate: "clamp",
  });
  const expand = scrollX.interpolate({
    inputRange,
    outputRange: [dotWidth, expandingDotWidth, dotWidth],
    extrapolate: "clamp",
  });
  return { colour, opacity, expand };
};

export const getScalingAnimations = ({
  scrollX,
  index,
  inactiveDotColor = Colors.transparentDark,
  activeDotColor = Colors.transparentBlack,
  inactiveDotOpacity = 0.5,
  activeDotScale = 1.4,
}: ScalingAnimationProps) => {
  const inputRange = [
    (index - 1) * screenWidth,
    index * screenWidth,
    (index + 1) * screenWidth,
  ];
  const colour = scrollX.interpolate({
    inputRange,
    outputRange: [inactiveDotColor, activeDotColor, inactiveDotColor],
    extrapolate: "clamp",
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [inactiveDotOpacity, 1, inactiveDotOpacity],
    extrapolate: "clamp",
  });
  const scale = scrollX.interpolate({
    inputRange: inputRange,
    outputRange: [1, activeDotScale, 1],
    extrapolate: "clamp",
  });

  return { colour, opacity, scale };
};
