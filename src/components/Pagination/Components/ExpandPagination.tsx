import React, { Fragment } from "react";
import { Animated, StyleSheet } from "react-native";
import { ExpandingProps } from "../../../utils/Interfaces";
import { getExpandingAnimations } from "../PaginationHelper";

export const ExpandPagination = ({
  slides,
  scrollX,
  activeDotColor,
  inactiveDotColor,
  dotSize = 12,
  dotStyle,
  dotSpacing,
}: ExpandingProps) => {
  return (
    <Fragment>
      {slides.map((_: any, index: number) => {
        const {
          colour: backgroundColor,
          expand: width,
          opacity,
        } = getExpandingAnimations({
          scrollX,
          index,
          activeDotColor,
          inactiveDotColor,
          dotWidth: dotSize,
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dotStyle,
              { width: dotSize, height: dotSize, borderRadius: dotSize / 2 },
              dotStyle,
              { width, opacity, backgroundColor, marginHorizontal: dotSpacing },
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
