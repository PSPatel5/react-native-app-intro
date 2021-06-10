import React, { ReactNode, useRef, useState } from "react";
import { Animated, NativeScrollEvent, SafeAreaView, View } from "react-native";
import { screenWidth } from "../../themes";
import { styles } from "./styles";
import { BottomContainer } from "./Components/BottomContainer";
import { Page } from "./Components/Page";
import { BottomProps, PaginationProps } from "../../utils/Interfaces";

interface Props extends React.PropsWithChildren<any> {
  showPagination?: boolean;
  paginationProps?: PaginationProps;
  buttonProps?: BottomProps;
  renderPagination?: (
    activeIndex: number | undefined,
    totalSlides: number,
  ) => ReactNode;
  onSlideChange?: (currentIndex: number, prevIndex: number) => void;
}

const renderItem = (props: any) => {
  return <View style={styles.childWrapper}>{props.item}</View>;
};

const IntroSlider = (props: Props) => {
  const {
    children: slides,
    showPagination,
    paginationProps,
    buttonProps,
    renderPagination,
    onSlideChange,
    ...restProps
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const flRef = useRef();
  let scrollX = React.useRef(new Animated.Value(0)).current;

  if (!slides?.length) {
    return null;
  }

  const goToSlide = (slideNumber: number) => {
    if (flRef && flRef.current) {
      flRef?.current.scrollToOffset({ offset: slideNumber * screenWidth });
    }
    if (activeIndex !== slideNumber) {
      setActiveIndex(slideNumber);
    }
  };

  const handleSkipPress = () => {
    if (buttonProps && buttonProps.onSkipPress) {
      buttonProps.onSkipPress();
      return;
    }
    goToSlide(slides?.length - 1);
  };

  const handleNextPress = () => {
    const prevIndex = activeIndex;
    const nextIndex = Math.min(activeIndex + 1, slides.length - 1);
    if (buttonProps) {
      if (prevIndex === nextIndex && buttonProps.onDonePress) {
        buttonProps.onDonePress();
      } else if (buttonProps.onNextPress) {
        buttonProps.onNextPress(prevIndex, nextIndex);
      }
    }
    goToSlide(nextIndex);
  };

  const _onMomentumScrollEnd = (e: { nativeEvent: NativeScrollEvent }) => {
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offset / screenWidth);
    if (newIndex === activeIndex) {
      return;
    }
    const lastIndex = activeIndex;
    setActiveIndex(newIndex);
    if (onSlideChange) {
      onSlideChange(newIndex, lastIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        data={slides}
        renderItem={renderItem}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        initialNumToRender={slides.length}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        {...restProps}
      />
      <BottomContainer
        {...buttonProps}
        {...paginationProps}
        activeIndex={activeIndex}
        slides={slides}
        scrollX={scrollX}
        showPagination
        goToSlide={goToSlide}
        renderPagination={renderPagination}
        onNextPress={handleNextPress}
        onSkipPress={handleSkipPress}
      />
    </SafeAreaView>
  );
};

IntroSlider.Page = Page;

export { IntroSlider };
