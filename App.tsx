import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import 'expo-dev-client';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import FeatureOverviewScreen from '~/screens/featureOverviewScreen/FeatureOverviewScreen';
import { NAV_THEME } from '~/theme';
// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

export default function App() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
        backgroundColor="#F3F2F7"
      />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <FeatureOverviewScreen />
      </NavThemeProvider>
    </GestureHandlerRootView>
  );
}
