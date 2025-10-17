import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const RenderCount = ({
  backgroundColor = "dodgerblue",
  fontColor = "white",
}) => {
  //Initialisations
  //State
  const RenderCount = useRef(0);
  RenderCount.current += 1;
  // Handlers
  // View
  return (
    <Text style={[StyleSheet.count, { backgroundColor, color: fontColor }]}>
      Number of renders: {RenderCount.current}
    </Text>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5,
  },
});

export default RenderCount;
