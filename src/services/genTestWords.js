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

export const getRandomKey = keysLayout => {
  const activeKeys = getActiveKeys(keysLayout);

  return _.sample(activeKeys).keyVal;
};
