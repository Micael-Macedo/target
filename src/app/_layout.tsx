import { colors } from '@/theme/colors'
import { Stack } from 'expo-router'

export default function Layout() {
    console.log("PASSOU PELO LAYOUT PRIMEIRO!")
    return <Stack 
        screenOptions={{ 
            headerShown: false,
            contentStyle: { backgroundColor: colors.white }
         }}    
    />
};
