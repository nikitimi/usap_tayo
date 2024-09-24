import { Collapsible } from "@/components/Collapsible";
import dictionary, { type Letter } from "@/utils/dictionary";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

type DictionaryProps = {
  letter: Letter;
};

export default function Dictionary(props: DictionaryProps) {
  const { letter } = props;
  const words = dictionary(letter);

  const wordsInLength = `${words.length}`.length;

  return (
    <FlatList
      data={words}
      keyExtractor={(props) => `${props.line}`}
      renderItem={(props) => {
        const { index, item } = props;

        function formattedIndex(index: number) {
          let stringifiedIndex = `${index + 1}`;
          const indexInLength = stringifiedIndex.length;
          const differenceInLength = wordsInLength - indexInLength;

          for (let x = 0; x < differenceInLength; x++) {
            stringifiedIndex = ` ${stringifiedIndex}`;
          }

          return stringifiedIndex;
        }

        return (
          <View style={style.viewStyle}>
            <Collapsible title={formattedIndex(index) + ` ${item.word}`}>
              <Text style={style.wordStyle}>{item.word}</Text>
            </Collapsible>
          </View>
        );
      }}
    />
  );
}

const style = StyleSheet.create({
  viewStyle: {},
  wordStyle: {
    color: "white",
    textTransform: "capitalize",
  },
});
