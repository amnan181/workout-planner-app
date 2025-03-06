import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import styles from './ExercisePreviewCard.styles';

import AppView from '~/components/common/AppView/AppVIew';
import { Text } from '~/components/nativewindui/Text';
import { IExercise } from '~/types/appTypes';
import { RPW } from '~/utils/utils';

interface ExercisePreviewCardProps {
  exercise: IExercise;
}

const bottomButtons = [
  {
    title: 'Instructions',
    icon: require('~/assets/icons/instructions.png'),
  },
  {
    title: 'Warm Up',
    icon: require('~/assets/icons/warmUp.png'),
  },
  {
    title: 'FAQ',
    icon: require('~/assets/icons/faq.png'),
  },
];

export default function ExercisePreviewCard({ exercise }: ExercisePreviewCardProps) {
  function renderButtons(
    item: { title: string; icon: ImageSourcePropType | undefined },
    index: number
  ) {
    return (
      <AppView
        key={index}
        borderColor="#010101"
        borderWidth={1}
        borderRadius={50}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal={16}
        paddingVertical={7}>
        <Image source={item?.icon} resizeMode="contain" style={{ height: 17, width: 17 }} />
        <Text style={{ fontSize: 14, fontWeight: '600', paddingLeft: 4, color: '#464B50' }}>
          {item?.title}
        </Text>
      </AppView>
    );
  }
  return (
    <AppView style={styles.container}>
      <AppView
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }}>{exercise?.name}</Text>

        <AppView style={styles.replaceButton}>
          <Octicons name="arrow-switch" size={16} color="black" />
          <Text style={{ fontSize: 14, fontWeight: '600', paddingLeft: 10 }}>Replace</Text>
        </AppView>
      </AppView>
      <AppView style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: exercise?.gif_asset_url }}
          style={{ height: RPW(60), width: '100%' }}
        />
        <AppView bottom={10} left={10} style={styles.typeContainer}>
          <Image
            source={require('../../../assets/icons/dumbbell.png')}
            resizeMode="contain"
            style={{ height: 17, width: 17 }}
          />
          <Text style={{ fontSize: 11, fontWeight: '500', paddingLeft: 4, color: '#464B50' }}>
            Dumbbell
          </Text>
        </AppView>
      </AppView>
      <AppView flexDirection="row" justifyContent="space-between">
        {bottomButtons?.map(renderButtons)}
      </AppView>
    </AppView>
  );
}
