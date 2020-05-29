export const keyboardRows = [
  [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`, `P`, `[`, `]`, `\\`],
  [`A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`, `;`, `'`],
  [`Z`, `X`, `C`, `V`, `B`, `N`, `M`, `.`, `/`]
];

const keyMapConfig = (keyVal, row, pos) => ({
  [keyVal]: {
    keyVal,
    pos,
    row
  }
});

export const keyMap = {
  ...keyMapConfig(`Q`, 0, 0),
  ...keyMapConfig(`W`, 0, 1),
  ...keyMapConfig(`E`, 0, 2),
  ...keyMapConfig(`R`, 0, 3),
  ...keyMapConfig(`T`, 0, 4),
  ...keyMapConfig(`Y`, 0, 5),
  ...keyMapConfig(`U`, 0, 6),
  ...keyMapConfig(`I`, 0, 7),
  ...keyMapConfig(`O`, 0, 8),
  ...keyMapConfig(`P`, 0, 9),
  ...keyMapConfig(`[`, 0, 10),
  ...keyMapConfig(`]`, 0, 11),
  ...keyMapConfig(`\\`, 0, 12),

  ...keyMapConfig(`A`, 1, 0),
  ...keyMapConfig(`S`, 1, 1),
  ...keyMapConfig(`D`, 1, 2),
  ...keyMapConfig(`F`, 1, 3),
  ...keyMapConfig(`G`, 1, 4),
  ...keyMapConfig(`H`, 1, 5),
  ...keyMapConfig(`J`, 1, 6),
  ...keyMapConfig(`K`, 1, 7),
  ...keyMapConfig(`L`, 1, 8),
  ...keyMapConfig(`;`, 1, 9),
  ...keyMapConfig(`'`, 1, 10),

  ...keyMapConfig(`Z`, 2, 0),
  ...keyMapConfig(`X`, 2, 1),
  ...keyMapConfig(`C`, 2, 2),
  ...keyMapConfig(`V`, 2, 3),
  ...keyMapConfig(`B`, 2, 4),
  ...keyMapConfig(`N`, 2, 5),
  ...keyMapConfig(`M`, 2, 6),
  ...keyMapConfig(`.`, 2, 7),
  ...keyMapConfig(`/`, 2, 8)
};

export const keyConfig = (keyVal, isInPractice = true) => ({
  isInPractice,
  keyVal: keyVal.toUpperCase()
});

export const keysLayout = [
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
