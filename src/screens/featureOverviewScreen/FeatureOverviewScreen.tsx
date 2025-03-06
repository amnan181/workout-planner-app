import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import AppView from '~/components/common/AppView/AppVIew';
import { AppContainer } from '~/components/common/appContainer/AppContainer';
import AppHeader from '~/components/common/appHeader/AppHeader';
import AppText from '~/components/common/appText/AppText';
import ExerciseCircle from '~/components/fitness/exerciseCircle/ExerciseCircle';
import { IExercise } from '~/types/appTypes';
import styles from './FeatureOverviewScreen.styles';
import ExercisePreviewCard from '~/components/fitness/exercisePreviewCard/ExercisePreviewCard';
import { RPH } from '~/utils/utils';
import SaveChangesButton from '~/components/fitness/saveChangesBottom/SaveChangesButton';
import DraggableFlatList, { ScaleDecorator } from '~/package/draggableFlatlist';
import useFeatureOverview from '~/hooks/useFeatureOverview';

const keyExtractor = (item) => item.exerciseId;

export default function FeatureOverviewScreen() {
  const {
    activity,
    data,
    isEditing,
    onDiscard,
    onSaveChanges,
    selectedExercises,
    setActivity,
    setSelectedExercises,
    setData,
    setIsEditing,
    data_,
  } = useFeatureOverview();

  function renderExercises({ drag, isActive, item, index }) {
    function onExerciseClick() {
      setSelectedExercises(item);
    }
    function onLongPress() {
      setIsEditing(true);
      drag();
    }
    const isDone = activity[item?.exerciseId]?.completed;
    const isCurrently = activity[item?.exerciseId]?.isActive;
    return (
      <ScaleDecorator activeScale={1.2}>
        <ExerciseCircle
          isDone={isDone}
          onPress={onExerciseClick}
          onLongPress={onLongPress}
          disabled={isActive}
          isActive={isCurrently}
          item={item}
          isEditing={isEditing}
        />
      </ScaleDecorator>
    );
  }

  return (
    <AppContainer>
      <AppHeader title={data_?.workout_name} />
      <AppView style={{ backgroundColor: '#F3F2F7', paddingHorizontal: 16, height: RPH(100) }}>
        <AppView style={styles.exercisesContainer}>
          <DraggableFlatList
            keyExtractor={keyExtractor}
            data={data}
            horizontal
            ListFooterComponent={<AppText>footer</AppText>}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 10 }}
            onDragEnd={({ data }) => {
              setData(data);
              // Update server state
            }}
            dragItemOverflow
            renderItem={renderExercises}
          />
        </AppView>
        {selectedExercises ? <ExercisePreviewCard exercise={selectedExercises} /> : null}
        {isEditing ? (
          <SaveChangesButton onDiscard={onDiscard} onSaveChanges={onSaveChanges} />
        ) : null}
      </AppView>
    </AppContainer>
  );
}
