import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { alphabet } from "../dictionary";

type InitialState = {
  letter: (typeof alphabet)[number];
};

const initialState: InitialState = {
  letter: "a",
};

type DictionaryContextType = InitialState & {
  setLetter: (letter: (typeof alphabet)[number]) => void;
};

const DictionaryContext = createContext<DictionaryContextType>({
  ...initialState,
  setLetter: () => {},
});

export default function DictionaryProvider({ children }: PropsWithChildren) {
  const [letter, setState] = useState(initialState.letter);

  function setLetter(letter: (typeof alphabet)[number]) {
    setState(letter);
  }

  return (
    <DictionaryContext.Provider value={{ letter, setLetter }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export const useDictionaryContext = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error(
      "useDictionaryContext must be used within a DictionaryProvider"
    );
  }
  return context;
};
