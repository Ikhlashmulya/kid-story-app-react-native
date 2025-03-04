import { useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text } from "react-native";
import stories from "@/assets/story.json";
import Svg, { Path, G } from "react-native-svg";

export default function Index() {
  const { id } = useLocalSearchParams();
  const selectedStory = stories.Data.filter((story) => story.id === id)[0];

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedStory.image }}
        style={{ width: "100%", height: 300 }}
      />
      <Pressable
        onPress={() => {
          alert("play audio");
        }}
        style={{
          backgroundColor: "#f7b801",
          padding: 10,
          borderRadius: 100,
          margin: 10,
          position: "absolute",
          zIndex: 1,
          top:250,
          left: 10,
        }}
      >
        <Svg viewBox="0 0 24 24" fill="white" style={{ width: 30, height: 30 }}>
          <G>
            <Path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <Path d="M9 16.766V7.234L16.944 12zm2-6v2.468L13.056 12z" />
          </G>
        </Svg>
      </Pressable>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: -10,
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: "#2ec4b6",
          color: "white",
        }}
      >
        {selectedStory.title}
      </Text>
      <Text>{selectedStory.story_text}</Text>
    </ScrollView>
  );
}
