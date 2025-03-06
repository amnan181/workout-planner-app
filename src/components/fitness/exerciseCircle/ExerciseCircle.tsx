import React from 'react';
import { Image, StyleSheet } from 'react-native';

import AppView from '~/components/common/AppView/AppVIew';
import { IExercise } from '~/types/appTypes';

import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ExerciseCircleProps {
  item: IExercise;
  isActive?: boolean;
  isDone?: boolean;
  isEditing?: boolean;
  onPress?(): void;
  onLongPress?(): void;
}
export default function ExerciseCircle({
  item,
  isActive,
  onPress,
  disabled,
  isDone,
  onLongPress,
  isEditing,
}: ExerciseCircleProps) {
  return (
    <AppView
      useButton
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      style={[styles.container, isActive && !isEditing ? styles.active : null]}>
      <AppView style={styles.innerContainer}>
        <Image resizeMode="contain" src={item?.gif_asset_url} style={{ height: 65, width: 72 }} />
      </AppView>
      {(isDone || isActive) && !isEditing ? (
        <AppView style={styles.playIconContainer}>
          {isDone ? (
            <Entypo name="check" size={12} color="black" />
          ) : (
            <Foundation name="play" style={{ paddingLeft: 3 }} size={13} color="black" />
          )}
        </AppView>
      ) : null}
      {isEditing ? (
        <AppView style={styles.editingIconContainer}>
          <Entypo name="minus" size={18} color="white" />
        </AppView>
      ) : null}
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 68,
    width: 68,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F3F2F7',
  },
  active: {
    backgroundColor: '#FFE74C',
    shadowColor: '#00000026',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 6.5,
  },
  playIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFE74C',
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  editingIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#990D35',
    height: 23,
    width: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: '#fff',
  },
});
