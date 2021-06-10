import React, { ReactNode } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { If, BottomButton, Pagination } from "../../index";
import { Colors, normalize, screenWidth } from "../../../themes";
import { BottomProps, PaginationProps } from "../../../utils/Interfaces";

interface Props extends BottomProps, PaginationProps {
  slides: any;
  activeIndex: number;
  showPagination?: boolean;
  scrollX: Animated.Value;
  goToSlide: (slideNumber: number) => void;
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
    bottomContainerStyle,
    goToSlide,
    renderPagination,
    renderNextButton,
    renderSkipButton,
    onSkipPress,
    onNextPress,
    ...paginationProps
  } = props;
  const totalSlides = slides.length;
  const isLastPage = activeIndex === totalSlides - 1;
  const shouldShowSkipButton = Boolean(
    (showSkipButton || renderSkipButton) && !isLastPage,
  );
  return (
    <View style={[styles.bottomContainer, bottomContainerStyle]}>
      <If condition={shouldShowSkipButton}>
        <If condition={Boolean(renderSkipButton)}>
          {renderSkipButton &&
            renderSkipButton({
              onSkipPress,
              activeIndex,
              totalSlides,
              goToSlide,
            })}
        </If>
        <If condition={!renderSkipButton}>
          <BottomButton
            title={skipButtonText}
            buttonStyle={[styles.skipButtonStyle, skipContainerStyle]}
            titleStyle={[{ color: Colors.primary }, skipTextStyle]}
            onPress={onSkipPress}
          />
        </If>
      </If>
      <If condition={!shouldShowSkipButton}>
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
      <If condition={Boolean(renderNextButton)}>
        {renderNextButton &&
          renderNextButton({
            activeIndex,
            totalSlides,
            isLastPage,
            onNextPress,
            goToSlide,
          })}
      </If>
      <If condition={!renderNextButton}>
        <BottomButton
          title={nextButtonText || isLastPage ? "Done" : "Next"}
          buttonStyle={[styles.nextButtonStyle, nextTextStyle]}
          titleStyle={nextTextStyle}
          onPress={onNextPress}
        />
      </If>
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
    minHeight: 50,
  },
  nextButtonStyle: {
    borderRadius: 32,
  },
});
