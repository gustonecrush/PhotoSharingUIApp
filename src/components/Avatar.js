import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../assets/themes";

const Avatar = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar, index) => (
        <Image
          source={avatar.image}
          style={[
            styles.avatarStyle,
            { zIndex: index, marginLeft: index * 19 },
            index !== avatars.length - 1 && { position: "absolute" },
          ]}
          key={index}
        />
      ))}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatarStyle: {
    resizeMode: "cover",
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: theme.borderRadius.xs,
    borderColor: theme.colors.white,
  },
});
