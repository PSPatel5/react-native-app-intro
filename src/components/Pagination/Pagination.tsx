import React, { ReactNode } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { If } from "../index";
import {
  ExpandPagination,
  SlidingDot,
  SlidingBorder,
  ScalingDot,
} from "./Components";
import { PaginationProps } from "../../utils/Interfaces";
interface PaginationComponentProps extends PaginationProps {
  showPagination?: boolean;
  slides: [];
  activeIndex?: number;
  scrollX: Animated.Value;
  renderPagination?: (
    activeIndex: number | undefined,
    totalSlides: number,
  ) => ReactNode;
}

export const Pagination = ({
  showPagination,
  animationType = "sliding-border",
  containerStyle,
  renderPagination,
  ...restProps
}: PaginationComponentProps) => {
  return (
    <If condition={Boolean(showPagination || renderPagination)}>
      <If condition={!renderPagination}>
        <View style={[styles.paginationContainer, containerStyle]}>
          <If condition={animationType === "expanding"}>
            <ExpandPagination {...restProps} />
          </If>
          <If condition={animationType === "sliding-dot"}>
            <SlidingDot {...restProps} />
          </If>
          <If condition={animationType === "sliding-border"}>
            <SlidingBorder {...restProps} />
          </If>
          <If condition={animationType === "scaling-dot"}>
            <ScalingDot {...restProps} />
          </If>
        </View>
      </If>
      <If condition={Boolean(renderPagination)}>
        {renderPagination &&
          renderPagination(restProps.activeIndex, restProps.slides.length)}
      </If>
    </If>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
});
