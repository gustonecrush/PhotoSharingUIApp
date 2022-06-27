import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../assets/themes";
import Avatar from "./Avatar";
import ImageGallery from "./ImageGallery";
import SharedAlbumTitleCard from "./SharedAlbumTitleCard";
import backgroundImages from "../../assets/data/backgroundImages";

const SharedAlbum = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <SharedAlbumTitleCard album={item} />

      <View style={styles.avatarContainer}>
        <Avatar avatars={item.avatars} />
        <Text style={styles.textAvatar}>{`${item.avatars.length} people`}</Text>
      </View>

      <ImageGallery images={backgroundImages} />
    </ScrollView>
  );
};

export default SharedAlbum;

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m,
  },
  textAvatar: {
    ...theme.textVariants.body3,
    color: theme.colors.black,
    opacity: 0.3,
  },
});
