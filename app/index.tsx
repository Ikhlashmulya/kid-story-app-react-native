import LeaveAReviewButton from "@/components/leave-a-review-button";
import ShareAppButton from "@/components/share-app-button";
import StartTellingButton from "@/components/start-telling-button";
import { Image, View } from "react-native";

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
