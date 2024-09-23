import { Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { alphabet } from "@/utils/dictionary";
import { useDictionaryContext } from "@/utils/contexts/dictionary-provider";

export default function Alphabet() {
  const { setLetter } = useDictionaryContext();

  return (
    <FlatList
      data={alphabet}
      renderItem={({ item }) => (
        <Pressable onPress={() => setLetter(item)}>
          <Text style={styles.letter}>{item}</Text>
        </Pressable>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={5}
      columnWrapperStyle={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({
  letter: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
    flex: 1,
    margin: 5,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 4,
    padding: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "white",
  },
});
