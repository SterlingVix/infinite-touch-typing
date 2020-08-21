import _ from "lodash";

export const getActiveKeys = keysLayout => {
  const activeKeys = [
    ..._.filter(keysLayout[0], "isInPractice"),
    ..._.filter(keysLayout[1], "isInPractice"),
    ..._.filter(keysLayout[2], "isInPractice")
  ];

  if (activeKeys.length < 2) {
    alert(`You must have at least 2 keys active.`);
    return false;
  }

  return activeKeys;
};

// const genNumberOfWords = () => 2 + 2 * _.random(0, 2) + _.random(0, 2);
const genNumberOfWords = () => {
  return 4;
};

export const genWord = keysLayout => {
  const activeKeys = getActiveKeys(keysLayout);

  let word = "";
  for (var i = 0; i < genNumberOfWords(); i++) {
    word += _.sample(activeKeys).keyVal;
  }

  return word;
};

export const genSentence = keysLayout => {
  let sentence = "";

  for (var i = 0; i < genNumberOfWords(); i++) {
    if (i > 0) {
      sentence += " "; // Add spaces between words.
    }
    sentence += genWord(keysLayout); // TODO: cache getActiveKeys?
  }
  return sentence;
};
