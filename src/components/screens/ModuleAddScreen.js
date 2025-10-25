import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleId: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: "CI6330",
  ModuleName: "Mobile Application Development",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Grame JONES",
  ModuleImage:
    "https://media.istockphoto.com/id/579156228/photo/modern-touchscreen-smartphone.jpg?s=612x612&w=is&k=20&c=ZfXwhMkT6f2dYgJ2w7kC8gtHfeVw5bB-FA7U9RIFQeA=",
};

const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;
  return (
    <Screen style={styles.container}>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default ModuleAddScreen;
