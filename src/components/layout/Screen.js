import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const Screen = ({ children }) => {
  //=> this is an arrow function so basically this is another syntax of writing a functions
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
