import { Stack, useLocalSearchParams } from 'expo-router';

export default function SurveyLayout() {
  const selectedPath = useLocalSearchParams()

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
