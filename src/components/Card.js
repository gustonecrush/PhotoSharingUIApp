import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import theme from "../../assets/themes";
import Avatar from "./Avatar";

const Card = ({ item, navigation }) => {
  return (
    <ImageBackground source={item.background} style={styles.imgBackground}>
      <Pressable
        onPress={() => navigation.navigate("Shared Album", { item: item })}
      >
        <View style={styles.imgContentContainer}>
          <View>
            <Text style={styles.imgTitle}>{item.title}</Text>
            <Text style={styles.imgSubtitle}>{`Created by ${item.user}`}</Text>
          </View>

          <View style={styles.avatarWrapper}>
            <Avatar avatars={item.avatars} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  imgBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: "center",
  },
  imgContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imgSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
});
