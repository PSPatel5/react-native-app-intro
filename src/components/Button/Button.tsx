import React from "react";
import { If } from "../index";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Colors, normalize } from "../../themes";
interface Props {
  onPress: () => void;
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const BottomButton = (props: Props) => {
  const { title, titleStyle, buttonStyle, children, onPress } = props;
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyle]}>
      <If condition={Boolean(title)}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </If>
      <If condition={Boolean(children)}>{children}</If>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(18),
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderRadius: normalize(4),
    marginVertical: normalize(2),
    marginHorizontal: normalize(4),
  },
  disabledButton: {
    backgroundColor: Colors.lightGrey,
  },
  titleStyle: {
    textTransform: "uppercase",
    color: Colors.white,
  },
});
