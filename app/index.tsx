import LeaveAReviewButton from "@/components/leave-a-review-button";
import ShareAppButton from "@/components/share-app-button";
import StartTellingButton from "@/components/start-telling-button";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 200 }}
        source={require("@/assets/images/hero-image.png")}
        resizeMode="contain"
      />
      <StartTellingButton />
      <ShareAppButton />
      <LeaveAReviewButton />
    </View>
  );
}
