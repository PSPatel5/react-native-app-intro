import React, { Fragment } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { screenWidth, Colors } from "../../../themes";
import { SlidingBorderProps } from "../../../utils/Interfaces";

export const SlidingBorder = ({
  scrollX,
  slides,
  dotSize = 24,
  activeDotColor = Colors.primary,
  inactiveDotColor = Colors.transparentDark,
  borderPadding,
  dotStyle,
  dotSpacing = 0,
  activeIndex,
  activeDotStyle,
  borderWidth = 1,
}: SlidingBorderProps) => {
  const inputRange = [-screenWidth, 0, screenWidth];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-dotSize + dotSpacing * 2, 0, dotSize + dotSpacing * 2],
  });

  return (
    <Fragment>
      {slides.map((_item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dotContainerStyle,
              {
                width: dotSize,
                marginHorizontal: dotSpacing,
              },
            ]}
          >
            <View
              style={[
                styles.dotStyle,
                {
                  width: dotSize / 2,
                  height: dotSize / 2,
                  borderRadius: dotSize / 4,
                  backgroundColor:
                    activeIndex === index ? activeDotColor : inactiveDotColor,
                },
                dotStyle,
              ]}
            />
          </View>
        );
      })}
      <Animated.View
        style={[
          styles.slidingIndicatorStyle,
          {
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            transform: [{ translateX }],
            borderColor: activeDotColor,
            padding: borderPadding,
            borderWidth,
          },
          activeDotStyle,
          { marginHorizontal: dotSpacing },
        ]}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotStyle: {
    backgroundColor: Colors.white,
  },
  dotContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  slidingIndicatorStyle: {
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    left: 0,
  },
});
