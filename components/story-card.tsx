import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

type StoryCardProps = {
  id: string;
  imageLink: string;
  storyTitle: string;
};

export default function StoryCard({ imageLink, storyTitle, id }: StoryCardProps) {
  return (
    <Pressable
      onPress={() => {
        router.navigate(`/story/${id}`);
      }}
      style={{
        width: 160,
        height: 250,
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: imageLink }}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          marginTop: -45,
          padding: 5,
          opacity: 0.8,
          height: 50,
          overflow: "hidden",
        }}
      >
        <Text>{storyTitle}</Text>
      </View>
    </Pressable>
  );
}
