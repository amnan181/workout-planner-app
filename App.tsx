import { StatusBar } from 'expo-status-bar';
import './global.css';
import AppView from '~/components/common/AppView/AppVIew';
import AppButton from '~/components/common/appButton/AppButton';
import { AppContainer } from '~/components/common/appContainer/AppContainer';
import AppInput from '~/components/common/appInput/AppInput';
import AppText from '~/components/common/appText/AppText';

export default function App() {
  return (
    <AppContainer>
      <StatusBar style="auto" />
      <AppView className="space-y-4">
        <AppText className="text-2xl font-bold">Welcome to NativeWind!</AppText>
        <AppInput placeholder="Enter your name" className="border-2 border-blue-500" />
        <AppButton title="Click Me" onPress={() => alert('Button clicked!')} />
      </AppView>
    </AppContainer>
  );
}
