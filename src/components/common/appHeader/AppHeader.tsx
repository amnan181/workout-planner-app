import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

import AppView from '../AppView/AppVIew';

import { Text } from '~/components/nativewindui/Text';

interface AppHeaderProps {
  title: string;
}
export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <AppView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#F3F2F7',
      }}>
      <Ionicons name="chevron-back-outline" size={24} color="black" />
      <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10 }} variant="largeTitle">
        {title}
      </Text>
    </AppView>
  );
}
