import React, { useEffect, useState } from 'react';
import { animationType } from '@pspatel/react-native-app-intro/src/utils/Interfaces';
import { Button, If } from 'components';
import {
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { normalize, screenHeight, screenWidth, Images, Colors } from 'themes';
import { navigate } from 'navigation/NavigationService';
interface AnimationListProps {
  title: string;
  onPress: animationType;
}

const animationList: AnimationListProps[] = [
  {
    title: 'Expand',
    onPress: 'expanding',
  },
  {
    title: 'Scaling Dot',
    onPress: 'scaling-dot',
  },
  {
    title: 'Sliding Dot',
    onPress: 'sliding-dot',
  },
  {
    title: 'Sliding Border',
    onPress: 'sliding-border',
  },
];

type eventTypes = animationType | 'custom Button';

export const InitialScreen = () => {
  const [isAnimationExpanded, setIsAnimationExpanded] = useState(false);
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  });
  const handleOnPress = (event: eventTypes) => {
    let params;
    switch (event) {
      case 'expanding':
      case 'sliding-border':
      case 'sliding-dot':
      case 'scaling-dot':
        params = {
          paginationProps: {
            animationType: event,
            dotSpacing: 8,
          },
        };
        break;
      default:
        break;
    }
    navigate('Demo', { ...params });
  };

  const renderButtons = ({ item }: { item: AnimationListProps }) => {
    return (
      <Button
        title={item.title}
        buttonStyle={styles.buttonStyle}
        onPress={() => handleOnPress(item.onPress)}
      />
    );
  };

  const handleAnimationViewToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsAnimationExpanded(!isAnimationExpanded);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'React Native Onboarding Demo'}</Text>
      <Image source={Images.Gadget} style={styles.image} />
      <View style={styles.animationContainer}>
        <Button
          buttonStyle={[
            styles.animationHeaderContainer,
            { borderBottomWidth: isAnimationExpanded ? 0.5 : 0 },
          ]}
          onPress={handleAnimationViewToggle}>
          <Text>{'Animation Types'}</Text>
          <Text>{isAnimationExpanded ? '▲' : '▼'}</Text>
        </Button>
        <If condition={isAnimationExpanded}>
          <FlatList
            data={animationList}
            numColumns={2}
            contentContainerStyle={styles.flContainer}
            keyExtractor={item => item.title}
            renderItem={renderButtons}
          />
        </If>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '700',
    marginTop: normalize(14),
  },
  image: {
    maxWidth: screenWidth * 0.8,
    maxHeight: screenHeight * 0.4,
    resizeMode: 'center',
    alignSelf: 'center',
    marginVertical: normalize(22),
  },
  animationContainer: {
    borderWidth: 0.5,
    borderRadius: normalize(6),
  },
  animationHeaderContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 0,
    paddingVertical: normalize(12),
    backgroundColor: Colors.transparent,
  },
  flContainer: {
    alignItems: 'center',
    marginHorizontal: normalize(2),
    marginVertical: normalize(12),
  },
  buttonStyle: {
    width: '47%',
    borderRadius: normalize(8),
  },
});
