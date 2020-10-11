import _ from "lodash";

export const keyboards = {
  en_US: {
    initiallyDisabledCharacters: [`[`, `]`, `\\`, `;`, `'`, `.`, `,`, `/`],
    /**
     * `keyboardLayout` describes the physical layout of the keyboard.
     * Each letter in the array is also the key for data in `characterData`.
     * That's all.
     * @type {string[][]}
     */
    keyboardLayout: [
      [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`, `P`, `[`, `]`, `\\`],
      [`A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `;`, `'`],
      [`Z`, `X`, `C`, `V`, `B`, `N`, `M`, `,`, `.`, `/`]
    ]
  }
  // TODO: German
  // TODO: Korean
};

/**
 * `generateCharacterData` returns an Object with:
 *  - keyboard keys (characters) as Object keys
 *  - a character-specific config as Object data
 *
 * @param keyboard - the `keyboardLayout` being tested
 * @param disabledCharacters - an Array of disabled characters
 * @returns {{}}
 */
export const generateCharacterData = (keyboard, disabledCharacters) => {
  const characterData = {};
  _.flatten(keyboard).forEach(keyboardCharacter => {
    characterData[keyboardCharacter] = {
      isInPractice: !_.includes(disabledCharacters, keyboardCharacter)
      // TODO: score
    };
  });
  return characterData;
};

const { en_US } = keyboards;

// Use this default export to bootstrap initial App state.
export const defaultConfig = generateCharacterData(
  en_US.keyboardLayout,
  en_US.initiallyDisabledCharacters
);
