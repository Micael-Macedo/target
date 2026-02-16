import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { style } from "./style";
import { colors } from "@/theme/colors";

export default function HomeHeader() {
    return (
        <LinearGradient
            colors={[colors.blue[500], colors.blue[800]]}
            style={style.container}
        >
        </LinearGradient>
    )
};
