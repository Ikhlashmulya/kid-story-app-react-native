import StoryCard from "@/components/story-card";
import { FlatGrid } from "react-native-super-grid";
import stories from "@/assets/story.json";

export default function Index() {
  return (
    <FlatGrid
      data={stories.Data}
      itemDimension={130}
      spacing={10}
      renderItem={({ item }) => (
        <StoryCard id={item.id} imageLink={item.image} storyTitle={item.title} />
      )}
    />
  );
}
