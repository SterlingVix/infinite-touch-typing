import _ from "lodash";

/**
 * Returns an array of just active keys:
 *   [`Q`, `W`], etc.
 * @param charactersConfig
 */
export const getActiveKeys = charactersConfig => {
  const activeChars = _.reduce(
    charactersConfig,
    (reducer, config, keyChar) => [
      ...reducer,
      ...(config.isInPractice ? [keyChar] : [])
    ],
    []
  );

  if (activeChars.length < 2) {
    alert(`You must have at least 2 keys active.`);
    return false;
  }

  return activeChars;
};

const genNumberOfWords = () => 2 + 2 * _.random(0, 2) + _.random(0, 2);

export const genWord = charactersConfig => {
  const activeKeys = getActiveKeys(charactersConfig);

  let word = "";
  for (var i = 0; i < genNumberOfWords(); i++) {
    word += _.sample(activeKeys);
  }

  return word;
};

export const genSentence = charactersConfig => {
  let sentence = "";

  for (let i = 0; i < genNumberOfWords(); i++) {
    if (i > 0) {
      sentence += " "; // Add spaces between words.
    }
    sentence += genWord(charactersConfig); // TODO: cache getActiveKeys?
  }
  return sentence;
};
