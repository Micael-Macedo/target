import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Button 
            title="Nova Meta" 
            onPress={() => router.navigate("/target")} />

        </View>
    )
};
