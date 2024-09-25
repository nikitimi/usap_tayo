import tagalog_dict_lines from "@/assets/tagalog_dict_lines.json";

export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

/**
 * Input a character in the alphabet, exludes _enye_.
 * @param letter
 * @returns \{
 *    line: number,
 *    word: string
 * \}[]
 */
export type Letter = (typeof alphabet)[number];

export default function dictionary(letter: Letter) {
  /**
   * The letter is included in the alphabet,
   * and the input is exactly one character.
   */
  if (alphabet.indexOf(letter) > -1 && letter.length === 1) {
    return tagalog_dict_lines.data.filter(
      ({ word }) =>
        word.startsWith(letter) || word.startsWith(letter.toUpperCase())
    );
  }

  console.log(
    "The inputted letter is either more than one character, or invalid alphabet character."
  );
  return [];
}
