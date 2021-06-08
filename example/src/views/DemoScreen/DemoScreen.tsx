import React, { Fragment } from 'react';
import { IntroSlider } from '@pspatel/react-native-app-intro';
import Images from 'themes/Images';
import { Button } from 'components';
import { pop } from 'navigation/NavigationService';
import { Platform } from 'react-native';

export const DemoScreen = (props: any) => {
  const {
    route: { params },
  } = props;
  return (
    <Fragment>
      <IntroSlider
        showPagination
        buttonProps={{
          showSkipButton: true,
          onDonePress: () => {
            alert('Done Pressed');
          },
        }}
        {...params}>
        <IntroSlider.Page
          title={'A Personal Computer'}
          image={Images.Computer}
          containerStyle={{ backgroundColor: '#f1cc12' }}
          description={
            'Computer Science is no more about computers than astronomy is about the telescopes ...'
          }
        />
        <IntroSlider.Page
          title={'A Smartphone'}
          image={Images.SmartPhone}
          containerStyle={{ backgroundColor: '#7cc8fa' }}
          description={
            'Mobile phone usage is on the rise and smartphone lovers are on a constant hunt to buy the best smartphone at a reasonable price'
          }
        />
        <IntroSlider.Page
          title={'A Smart watch'}
          image={Images.SmartWatch}
          containerStyle={{ backgroundColor: '#b1e4f9' }}
          description={
            'A watch has become so much more than something to tell time. With smart watches ...'
          }
        />
      </IntroSlider>
      <Button
        title={'Back'}
        buttonStyle={{
          position: 'absolute',
          top: Platform.select({ android: 30, ios: 80 }),
          left: 20,
        }}
        onPress={() => pop()}
      />
    </Fragment>
  );
};
