import React, { Fragment } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { screenWidth, Colors } from "themes";
import { SlidingDotProps } from "utils/Interfaces";

export const SlidingDot = ({
  scrollX,
  slides,
  dotSize = 12,
  dotStyle,
  dotSpacing = 4,
  activeDotStyle,
  activeDotColor = Colors.transparentBlack,
  inactiveDotColor = Colors.transparentDark,
}: SlidingDotProps) => {
  const inputRange = [-screenWidth, 0, screenWidth];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-dotSize + dotSpacing * 2, 0, dotSize + dotSpacing * 2],
  });
  const defaultSpacing = {
    marginHorizontal: dotSpacing,
  };
  return (
    <Fragment>
      <Animated.View
        style={[
          styles.slidingIndicatorStyle,
          {
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            transform: [{ translateX }],
            backgroundColor: activeDotColor,
          },
          dotStyle,
          activeDotStyle,
          defaultSpacing,
        ]}
      />
      {slides.map((_item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dotStyle,
              {
                width: dotSize,
                height: dotSize,
                borderRadius: dotSize / 2,
                backgroundColor: inactiveDotColor,
              },
              dotStyle,
              defaultSpacing,
            ]}
          />
        );
      })}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  activeDotContainer: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotStyle: {
    backgroundColor: Colors.transparentBlack,
    opacity: 0.4,
    marginHorizontal: 4,
  },
  slidingIndicatorStyle: {
    zIndex: 99,
    backgroundColor: Colors.white,
    position: "absolute",
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
