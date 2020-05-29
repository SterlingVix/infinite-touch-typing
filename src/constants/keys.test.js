import * as Keys from "../constants/keys";

const { keyConfig } = Keys;

describe(`keys`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`keyConfig returns the expected shape for a character`, () => {
    expect(keyConfig("a")).toEqual({
      isInPractice: true,
      keyVal: "A"
    });
  });
});
