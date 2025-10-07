import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

export const ModuleModifyScreen = () => {
  //=> this is an arrow function so basically this is another syntax of writing a functions
  return (
    <Screen style={styles.container}>
      <Text>Modify</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
