import React, { ReactNode } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { If, Button, Pagination } from "components";
import { Colors, normalize, screenWidth } from "themes";
import { BottomProps, PaginationProps } from "utils/Interfaces";

interface Props extends BottomProps, PaginationProps {
  slides: any;
  activeIndex: number;
  showPagination?: boolean;
  scrollX: Animated.Value;
  onSkipPress: () => void;
  onNextPress: () => void;
  renderPagination?: (
    activeIndex: number | undefined,
    totalSlides: number,
  ) => ReactNode;
}
export const BottomContainer = (props: Props) => {
  const {
    showSkipButton,
    skipButtonText = "Skip",
    skipTextStyle,
    skipContainerStyle,
    nextTextStyle,
    nextContainerStyle,
    slides,
    scrollX,
    activeIndex,
    showPagination,
    nextButtonText,
    renderPagination,
    onSkipPress,
    onNextPress,
    ...paginationProps
  } = props;
  return (
    <View style={styles.bottomContainer}>
      <If condition={Boolean(showSkipButton)}>
        <Button
          title={skipButtonText}
          buttonStyle={[styles.skipButtonStyle, skipContainerStyle]}
          titleStyle={[{ color: Colors.primary }, skipTextStyle]}
          onPress={onSkipPress}
        />
      </If>
      <If condition={!showSkipButton}>
        <View style={styles.emptySkipButton} />
      </If>
      <Pagination
        slides={slides}
        activeIndex={activeIndex}
        scrollX={scrollX}
        showPagination={showPagination}
        renderPagination={renderPagination}
        {...paginationProps}
      />
      <Button
        title={
          nextButtonText || activeIndex === slides.length - 1 ? "Done" : "Next"
        }
        buttonStyle={[styles.nextButtonStyle, nextTextStyle]}
        titleStyle={nextTextStyle}
        onPress={onNextPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skipButtonStyle: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.primary,
    borderRadius: 32,
    borderWidth: 1,
  },
  emptySkipButton: {
    width: normalize(screenWidth * 0.18),
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
    width: "95%",
  },
  nextButtonStyle: {
    borderRadius: 32,
  },
});
