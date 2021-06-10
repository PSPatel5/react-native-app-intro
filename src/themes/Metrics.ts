import { Dimensions, PixelRatio } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
const scale = screenWidth / 320;

export const normalize = (size: number) => {
  const newSize: number = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default {
  screenWidth,
  screenHeight,
  normalize,
};
