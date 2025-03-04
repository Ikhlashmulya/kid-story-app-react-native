import { useLocalSearchParams } from "expo-router";
import { BackHandler, Image, Pressable, ScrollView, Text } from "react-native";
import stories from "@/assets/story.json";
import Svg, { Path, G } from "react-native-svg";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";

export default function Index() {
  const { id } = useLocalSearchParams();
  const selectedStory = stories.Data.filter((story) => story.id === id)[0];
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (play) {
        Speech.stop();
        setPlay(false);
        return true;
      }
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
      setPlay(false);
      Speech.stop(); 
    };
  }, []);

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedStory.image }}
        style={{ width: "100%", height: 300 }}
      />
      <Pressable
        onPress={() => {
          if (!play) {
            Speech.speak(selectedStory.story_text);
            setPlay(true);
          } else {
            Speech.stop();
            setPlay(false);
          }
        }}
        style={{
          backgroundColor: "#f7b801",
          padding: 10,
          borderRadius: 100,
          margin: 10,
          position: "absolute",
          zIndex: 1,
          top: 250,
          left: 10,
        }}
      >
        {play ? (
          <Svg
            fill="white"
            viewBox="0 0 24 24"
            style={{ width: 30, height: 30 }}
          >
            <G>
              <Path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
              <Path d="M14 8v8a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zM8 8v8a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0z" />
            </G>
          </Svg>
        ) : (
          <Svg
            viewBox="0 0 24 24"
            fill="white"
            style={{ width: 30, height: 30 }}
          >
            <G>
              <Path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
              <Path d="M9 16.766V7.234L16.944 12zm2-6v2.468L13.056 12z" />
            </G>
          </Svg>
        )}
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
      <Text style={{ paddingHorizontal: 10 }}>{selectedStory.story_text}</Text>
    </ScrollView>
  );
}
