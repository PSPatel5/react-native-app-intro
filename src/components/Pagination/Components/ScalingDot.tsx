import React, { Fragment } from "react";
import { Animated, StyleSheet } from "react-native";
import { ScalingDotProps } from "../../../utils/Interfaces";
import { getScalingAnimations } from "../PaginationHelper";

export const ScalingDot = ({
  scrollX,
  slides,
  dotStyle,
  inactiveDotOpacity,
  inactiveDotColor,
  activeDotScale,
  activeDotColor,
  activeDotStyle,
  dotSize = 12,
  dotSpacing,
}: ScalingDotProps) => {
  return (
    <Fragment>
      {slides.map((_, index) => {
        const { colour, opacity, scale } = getScalingAnimations({
          scrollX,
          index,
          inactiveDotColor,
          inactiveDotOpacity,
          activeDotColor,
          activeDotScale,
        });
        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dotStyle,
              {
                opacity,
                transform: [{ scale }],
                width: dotSize,
                height: dotSize,
                borderRadius: dotSize / 2,
                backgroundColor: colour,
              },
              dotStyle,
              activeDotStyle,
              {
                marginHorizontal: dotSpacing,
              },
            ]}
          />
        );
      })}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
