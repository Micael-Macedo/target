import { ActivityIndicator } from "react-native";

import { colors } from "@/theme/colors";
import { style } from "./style";

export default function Loading() {
    return <ActivityIndicator 
        color={colors.blue[500]} 
        style={style.container}
        />
};
