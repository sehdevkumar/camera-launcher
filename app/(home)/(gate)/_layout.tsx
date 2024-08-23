import { Stack, useLocalSearchParams } from 'expo-router';

export default function GateLayout() {
  const selectedPath = useLocalSearchParams()
  return (
    <Stack
       screenOptions={
        {
          headerShown:true,
          headerTitle: (selectedPath.id +'').toLocaleUpperCase()
        }
       }
      >
      <Stack.Screen name="gatein"/>
      <Stack.Screen name="gateout"/>
    </Stack>
  );
}
