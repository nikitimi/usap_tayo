import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";

type SelectProps = {
  options: string[];
};

const Select = (props: SelectProps) => {
  const { options } = props;
  const closeButtonSign = "x";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function getFinalOptions() {
    const finalOptions = options.map((item) => item.toLowerCase());
    finalOptions.push(closeButtonSign);
    return finalOptions;
  }

  function handleOptionPress(option: typeof selectedOption) {
    setIsModalVisible(false);
    setSelectedOption(option);
  }

  return (
    <View style={style.selectParent}>
      <Modal
        onRequestClose={() => setIsModalVisible(false)}
        transparent
        visible={isModalVisible}
      >
        <Pressable
          onPress={() => setIsModalVisible(false)}
          style={style.modalParent}
        >
          <FlatList
            data={getFinalOptions()}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isCloseOption = item === closeButtonSign;
              function pressableProperties() {
                return {
                  onPress: () =>
                    isCloseOption
                      ? handleOptionPress(null)
                      : handleOptionPress(item),
                  style: isCloseOption
                    ? style.closeOption
                    : style.defaultOption,
                };
              }

              function textProperties() {
                return {
                  style: isCloseOption ? style.closeText : style.defaultText,
                };
              }
              return (
                <Pressable {...pressableProperties()}>
                  <Text {...textProperties()}>{item}</Text>
                </Pressable>
              );
            }}
            style={style.modalParentProper}
          />
        </Pressable>
      </Modal>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={commonStyles.inheritParent}
      >
        <ThemedText style={style.optionText}>
          {selectedOption === null ? "select" : selectedOption}
        </ThemedText>
      </Pressable>
    </View>
  );
};

const commonStyles = StyleSheet.create({
  inheritParent: {
    height: "100%",
    width: "100%",
  },
});
const style = StyleSheet.create({
  closeOption: {
    backgroundColor: "red",
  },
  closeText: {
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  },
  defaultOption: {
    backgroundColor: "white",
  },
  defaultText: {
    color: "black",
    textTransform: "capitalize",
  },
  modalParent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    width: "100%",
  },
  modalParentProper: {
    backgroundColor: "white",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 120,
  },
  optionText: {
    ...commonStyles.inheritParent,
    textAlign: "center",
    textTransform: "capitalize",
  },
  selectParent: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 4,
    borderWidth: 2,
    padding: 4,
    width: 120,
  },
});

export default Select;
