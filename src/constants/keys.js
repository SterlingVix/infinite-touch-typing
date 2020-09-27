import _ from "lodash";

export const keyboardRows = [
  [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`, `P`, `[`, `]`, `\\`],
  [`A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `;`, `'`],
  [`Z`, `X`, `C`, `V`, `B`, `N`, `M`, `.`, `/`]
];

const initiallyDisabledKeys = [`[`, `]`, `\\`, `;`, `'`, `.`, `/`];

const keyMapConfig = (keyVal, row, pos) => ({
  [keyVal]: {
    isInPractice: !_.includes(initiallyDisabledKeys, keyVal),
    keyVal,
    pos,
    row
  }
});

const getKeyMap = () =>
  keyboardRows.map((arrayOfKeysInRow, rowIdx) =>
    arrayOfKeysInRow.map((key, keyIdx) => keyMapConfig(key, rowIdx, keyIdx))
  );

export const keyMap = getKeyMap();

export const keyConfig = (keyVal, isInPractice = true) => ({
  isInPractice,
  keyVal
});

export const keysLayout = [
  // NOTE: "Keys" should always be upper-case.
  [
    keyConfig(`Q`),
    keyConfig(`W`),
    keyConfig(`E`),
    keyConfig(`R`),
    keyConfig(`T`),
    keyConfig(`Y`),
    keyConfig(`U`),
    keyConfig(`I`),
    keyConfig(`O`),
    keyConfig(`P`),
    keyConfig(`[`, false),
    keyConfig(`]`, false),
    keyConfig(`\\`, false)
  ],

  [
    keyConfig(`A`),
    keyConfig(`S`),
    keyConfig(`D`),
    keyConfig(`F`),
    keyConfig(`G`),
    keyConfig(`H`),
    keyConfig(`J`),
    keyConfig(`K`),
    keyConfig(`L`),
    keyConfig(`;`, false),
    keyConfig(`'`, false)
  ],

  [
    keyConfig(`Z`),
    keyConfig(`X`),
    keyConfig(`C`),
    keyConfig(`V`),
    keyConfig(`B`),
    keyConfig(`N`),
    keyConfig(`M`),
    keyConfig(`.`, false),
    keyConfig(`/`, false)
  ]
];
