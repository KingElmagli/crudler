import { Pressable, StyleSheet, Text, View } from "react-native";

const ModuleItem = ({ module, onSelect }) => {
  //Initialistaion
  //State
  //Handlers
  //View
  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode}
          {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Copper plate papyrus",
    fontWeight: "bold",
    color: "yellow",
  },
});

export default ModuleItem;
