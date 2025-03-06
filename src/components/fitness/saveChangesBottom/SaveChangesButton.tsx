import React from 'react';
import { Text } from 'react-native';
import AppView from '~/components/common/AppView/AppVIew';
import styles from './SaveChangesButton.styles';

export default function SaveChangesButton({
  onDiscard,
  onSaveChanges,
}: {
  onDiscard(): void;
  onSaveChanges(): void;
}) {
  return (
    <AppView
      flexDirection="row"
      absolute
      zIndex={10}
      style={styles.container}
      alignItems="center"
      justifyContent="space-between">
      <AppView useButton onPress={onDiscard} style={styles.buttonContainer}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#464B50' }}>Discard</Text>
      </AppView>
      <AppView
        useButton
        onPress={onSaveChanges}
        style={[styles.buttonContainer, { backgroundColor: '#FFE74C', marginLeft: 16 }]}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#010101' }}>Save Changes</Text>
      </AppView>
    </AppView>
  );
}
