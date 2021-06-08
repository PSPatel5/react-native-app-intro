import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TextStyle,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { If } from "../../index";
import { normalize, screenHeight, screenWidth } from "../../../themes";

interface PageProps {
  title: string;
  image: ImageSourcePropType;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
}

export const Page = (props: PageProps) => {
  const {
    title,
    image,
    description,
    containerStyle,
    titleStyle,
    imageStyle,
    descriptionStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Image source={image} style={[styles.image, imageStyle]} />
      <If condition={Boolean(description)}>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </If>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: normalize(14),
    fontWeight: "800",
  },
  image: {
    alignSelf: "center",
    resizeMode: "center",
    maxWidth: screenWidth * 0.9,
    maxHeight: screenHeight * 0.5,
  },
  description: {
    textAlign: "center",
    fontSize: normalize(13),
    lineHeight: normalize(18),
    paddingHorizontal: normalize(12),
  },
});
