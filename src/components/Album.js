import React, { useLayoutEffect, useRef } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../assets/themes/index";
import albumPage from "../../assets/data/albumPage";
import Card from "./Card";
import Separator from "./Separator";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import BottomSheetContent from "./BottomSheetContent";

const Album = ({ navigation, navigation: { setOptions } }) => {
  const sheetRef = useRef();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={openBottomSheet}>
          <View style={styles.openSheetButton}>
            <Feather name="plus" size={16} color={theme.colors.white} />
          </View>
        </TouchableOpacity>
      ),
    });
  });

  const renderBottomSheetContent = () => <BottomSheetContent handleClose={closeBottomSheet} />;
  const closeBottomSheet = () => {
    sheetRef.current.snapTo(1);
  }
  const openBottomSheet = () => {
    sheetRef.current.snapTo(0);
  }

  return (
    <View style={{ backgroundColor: theme.colors.white, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} navigation={navigation} />

              {index === 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 0]}
        initialSnap={1}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
      />
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
