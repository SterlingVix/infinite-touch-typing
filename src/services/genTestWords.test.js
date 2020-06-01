import * as GenTestWords from "./genTestWords";
import * as Keys from "../constants/keys";
import _ from "lodash";

const { getActiveKeys, genWord, genSentence } = GenTestWords;
const { keyConfig, keysLayout } = Keys;

describe(`genTestWords`, () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe(`getActiveKeys`, () => {
    it(`returns active keys for Keys.keysLayout.`, () => {
      const result = getActiveKeys(keysLayout);
      // TODO: getInactiveKeys.length()?
      const numOfDisabledKeys = 7; // NOTE: this needs to be manually kept in sync.

      expect(window.alert).not.toHaveBeenCalled();
      expect(result.length).toEqual(
        _.flatten(keysLayout).length - numOfDisabledKeys
      );
    });

    it(`returns active keys for valid keysLayout with active keys.`, () => {
      const layout = [
        [keyConfig("a"), keyConfig("b"), keyConfig("c")],
        [keyConfig("d"), keyConfig("e"), keyConfig("f")]
      ];
      const expected = [
        { isInPractice: true, keyVal: "A" },
        { isInPractice: true, keyVal: "B" },
        { isInPractice: true, keyVal: "C" },
        { isInPractice: true, keyVal: "D" },
        { isInPractice: true, keyVal: "E" },
        { isInPractice: true, keyVal: "F" }
      ];
      expect(getActiveKeys(layout)).toEqual(expected);
      expect(window.alert).not.toHaveBeenCalled();
    });

    it(`returns "false" for invalid keysLayout shape.`, () => {
      expect(getActiveKeys([{ key: "val" }, { key: "val" }])).toBe(false);
      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it(`returns "false" when less than 2 keys are active.`, () => {
      const inactive = [[keyConfig("a")]];
      expect(getActiveKeys(inactive)).toBe(false);
      expect(window.alert).toHaveBeenCalledTimes(1);
    });
  });

  const minLength = 2;
  const maxLength = 8;
  it(`"genWord" returns words between ${minLength} and ${maxLength} characters long.`, () => {
    for (var i = 0; i < 100; i++) {
      const randomWord = genWord(keysLayout);
      expect(randomWord.length).toBeGreaterThanOrEqual(minLength);
      expect(randomWord.length).toBeLessThanOrEqual(maxLength);
    }
  });

  it(`"genSentence" returns several words.`, () => {
    for (var i = 0; i < 10; i++) {
      const randomSentence = genSentence(keysLayout);
      const randomSentenceArr = randomSentence.split(" ");

      expect(typeof randomSentence).toBe("string");
      expect(randomSentenceArr.length).toBeGreaterThanOrEqual(minLength * 2);
      expect(randomSentenceArr.length).toBeLessThanOrEqual(maxLength * 2);
    }
  });
});
