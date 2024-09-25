import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Select } from "@/components/Select";
import { ToastProvider, useToast } from "@/components/Toast";
import Alphabet from "@/components/Alphabet";
import Dictionary from "@/components/Dictionary";
import DictionaryProvider, {
  useDictionaryContext,
} from "@/utils/contexts/dictionary-provider";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { alphabet, type Letter } from "@/utils/dictionary";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: "#1D3D47", light: "#A1CEDC" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ToastProvider position="top">
        <SelectContainer />
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => {
              router.replace("/explore");
            }}
            style={{
              borderColor: "white",
              borderRadius: 4,
              borderWidth: 2,
              padding: 4,
            }}
          >
            <Text style={{ color: "white" }}>Explore</Text>
          </TouchableOpacity>
        </View>

        <View>
          <DictionaryProvider>
            <DictionaryContainer />
          </DictionaryProvider>
        </View>
      </ToastProvider>
    </ParallaxScrollView>
  );
}

function DictionaryContainer() {
  const { letter } = useDictionaryContext();

  return (
    <View>
      <Alphabet />
      <Dictionary letter={letter} />
    </View>
  );
}

function SelectContainer() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | undefined>();
  const { toast } = useToast();

  return (
    <ScrollView>
      <Select
        selectClasses="text-white border-white border-2"
        labelClasses="text-white"
        labelKey={"label"}
        onSelect={(value) => {
          toast(`Selected letter ${value}`, "success");
          setSelectedLetter(value as Letter);
        }}
        selectedValue={
          selectedLetter === undefined ? undefined : (selectedLetter as string)
        }
        options={alphabet.map((letter) => ({
          label: letter.toLocaleUpperCase(),
          value: letter,
        }))}
        placeholder="Select a letter"
        valueKey={"value"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    bottom: 0,
    height: 178,
    left: 0,
    position: "absolute",
    width: 290,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  text: {
    color: "white",
    textTransform: "capitalize",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
});
