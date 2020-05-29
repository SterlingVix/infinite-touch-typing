import * as GenTestWords from "./genTestWords";
import * as Keys from "../constants/keys";
import _ from "lodash";

const { getActiveKeys } = GenTestWords;
const { keyConfig, keysLayout } = Keys;

describe(`genTestWords`, () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`keyConfig returns the expected shape for a character`, () => {
    expect(keyConfig("a")).toEqual({
      isInPractice: true,
      keyVal: "A"
    });
  });

  describe(`getActiveKeys`, () => {
    it(`returns active keys for Keys.keysLayout.`, () => {
      const result = getActiveKeys(keysLayout);

      expect(window.alert).not.toHaveBeenCalled();
      expect(result.length).toEqual(_.flatten(keysLayout).length);
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
});
