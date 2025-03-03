import { TouchableOpacity, Text } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function ShareAppButton() {
  return (
    <TouchableOpacity
        onPress={() => alert("Hello, World!")}
        style={{
          backgroundColor: "#577590",
          padding: 10,
          borderRadius: 10,
          gap: 5,
          height: 40,
          flexDirection: "row",
          width: 250,
          paddingStart: 15,
          marginTop: 10,
        }}
      >
        <Svg
          viewBox="0 0 128 128"
          fill="white"
          style={{ marginEnd: -100, marginStart: -96 }}
        >
          <Path d="M102.723 82.194a20.455 20.455 0 0 0-14.791 6.33L45.514 67.311a18.906 18.906 0 0 0 0-6.621l42.417-21.214a20.864 20.864 0 1 0-5.444-10.886L40.067 49.8a20.528 20.528 0 1 0 0 28.4l42.42 21.21a20.515 20.515 0 1 0 20.236-17.216zm0-73.944a17.028 17.028 0 1 1-17.029 17.028A17.047 17.047 0 0 1 102.723 8.25zM83.37 32.061a20.472 20.472 0 0 0 2.3 4.631L44.63 57.218a20.479 20.479 0 0 0-2.3-4.635zM25.277 81.028A17.028 17.028 0 1 1 42.306 64a17.047 17.047 0 0 1-17.029 17.028zm17.049-5.611a20.479 20.479 0 0 0 2.3-4.635l41.046 20.525a20.472 20.472 0 0 0-2.3 4.631zm60.4 44.333a17.028 17.028 0 1 1 17.027-17.028 17.047 17.047 0 0 1-17.03 17.028z" />
        </Svg>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginTop: -2,
            marginStart: 2,
          }}
        >
          Share App
        </Text>
      </TouchableOpacity>
  )
}