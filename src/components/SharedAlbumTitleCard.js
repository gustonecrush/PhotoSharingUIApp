import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import theme from "../../assets/themes";

const SharedAlbumTitleCard = ({ album }) => {
  return (
    <ImageBackground source={album.background} style={styles.imagegBackground}>
      <View style={styles.imageContentContainer}>
        <View>
          <Text style={styles.imageTitle}>{album.title}</Text>
          <Text style={styles.imageSubtitle}>{`Created by ${album.user}`}</Text>
        </View>

        <View>
          <Text style={styles.imageNumber}>120 photos</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SharedAlbumTitleCard;

const styles = StyleSheet.create({
  imagegBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.l,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: "flex-end",
    paddingVertical: theme.spacing.m,
  },
  imageContentContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
  imageNumber: {
    ...theme.textVariants.body3,
    color: theme.colors.gray,
  },
});
