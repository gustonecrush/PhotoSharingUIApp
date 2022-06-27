import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../assets/themes";

const BottomSheetContent = ({ handleClose }) => {
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        onPress={() => alert("Create a new album!")}
        style={styles.buttonLarge}
      >
        <Text stle={styles.buttonTitle}>Create a new album</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleClose}
        style={styles.buttonSmall}
      >
        <Text stle={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 250,
  },
  buttonTitle: {
    ...theme.textVariants.h2,
  },
  buttonLarge: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    padding: theme.spacing.l,
    backgroundColor: theme.colors.gray,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSmall: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.gray,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});
