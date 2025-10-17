import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

const ModuleViewScreen = () => {
  //=> this is an arrow function so basically this is another syntax of writing a functions
  return (
    <Screen style={styles.container}>
      <Text>View</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
