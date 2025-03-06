import { useState } from 'react';
import { IExercise } from '~/types/appTypes';

const data_ = {
  workout_name: 'Full Body 1',
  exercises: [
    {
      name: 'Squat',
      exerciseId: '1',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.gif',
      equipment: 'barbell',
    },
    {
      name: 'Inclined Bench Press',
      exerciseId: '2',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/031413.gif',
      equipment: 'barbell',
    },
    {
      name: 'Pull Ups',
      exerciseId: '3',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/142913.gif',
      equipment: 'bodyweight',
    },
    {
      name: 'Shoulder Press',
      exerciseId: '4',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/040513.gif',
      equipment: 'dumbbell',
    },
    {
      name: 'Curl Biceps',
      exerciseId: '5',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/016513.gif',
      equipment: 'cable',
    },
    {
      name: 'Extension Triceps',
      exerciseId: '6',
      gif_asset_url:
        'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/020013.gif',
      equipment: 'cable',
    },
  ],
};

const useFeatureOverview = () => {
  const [data, setData] = useState(data_.exercises);

  const [selectedExercises, setSelectedExercises] = useState<IExercise>(data_?.exercises?.[2]);
  const [isEditing, setIsEditing] = useState(false);
  const [activity, setActivity] = useState({
    1: {
      completed: true,
    },
    2: {
      isActive: true,
    },
  });
  function onDiscard() {
    setIsEditing(false);
  }
  function onSaveChanges() {}
  return {
    activity,
    onDiscard,
    onSaveChanges,
    isEditing,
    setActivity,
    selectedExercises,
    data,
    setSelectedExercises,
    setData,
    setIsEditing,
    data_,
  };
};

export default useFeatureOverview;
