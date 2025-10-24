import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  //Initialisations
  //State
  const [modules, setModules] = useState(initialModules);

  //Handlers

  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };
  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  // View
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default ModuleListScreen;
