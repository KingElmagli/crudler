import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import intialModules from "../../data/modules.js";

export const ModuleListScreen = () => {
  //=> this is an arrow function so basically this is another syntax of writing a functions
  const modules = initialModules;
  return (
    <Screen style={styles.container}>
      <Text>List</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
