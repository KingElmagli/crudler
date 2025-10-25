import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  //Initialisations
  //State
  const [modules, setModules] = useState(initialModules);

  //Handlers

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };

  const handleAdd = (module) => setModules([...modules, module]);

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  // View
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default ModuleListScreen;
