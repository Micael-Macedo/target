import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
    return (
        <View>
            <Text>Target component</Text>

            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
};
