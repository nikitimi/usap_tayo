import { Image, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import Dictionary from "@/components/Dictionary";
import DictionaryProvider, {
  useDictionaryContext,
} from "@/utils/contexts/dictionary-provider";
import Alphabet from "@/components/Alphabet";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <DictionaryProvider>
          <DictionaryContainer />
        </DictionaryProvider>
      </ThemedView>
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

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    color: "white",
    textTransform: "capitalize",
  },
});
