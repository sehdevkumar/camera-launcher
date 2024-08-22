import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#676767',
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Hello',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: 'Gate'
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="gateIn" />


    </Stack>
  );
}
