import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons";

const ModuleView = ({ module, onDelete }) => {
  //Initialistaion
  //State
  //Handlers
  const handleDelete = () => onDelete(module);

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      `Are you sure that you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  //View
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>

        <Text style={styles.text}>Level {module.ModuleLevel}</Text>

        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}> (Module Leader) </Text>
        </Text>
      </View>
      <ButtonTray>
        <Button icon={<Icons.edit />} label="Modify" />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRdius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 18,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dimText: {
    fontSize: 16,
    color: "grey",
  },
});

export default ModuleView;
