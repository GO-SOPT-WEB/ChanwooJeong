export const EASY_POKEMON_LIST = [
  {
    id: 1,
    name: "이상해씨",
    tag: ["진화1", "귀여운", "잎사귀", "식물성"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
    JJim: false,
    evolution: 1,
  },
  {
    id: 2,
    name: "피캬츄",
    tag: ["진화1", "번개", "주인공", "전기충격"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png",
    JJim: false,
    evolution: 1,
  },

  {
    id: 3,
    name: "날쌩마",
    tag: ["진화2", "유니콘", "얼룩말"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/007802.png",
    JJim: false,
    evolution: 2,
  },
  {
    id: 4,
    name: "어니부기",
    tag: ["진화2", "꼬북이", "물"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000801.png",
    JJim: false,
    evolution: 2,
  },
  {
    id: 5,
    name: "리자몽",
    tag: ["진화3", "불속성", "난폭한"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000604.png",
    JJim: false,
    evolution: 3,
  },
];

export const NORMAL_POKEMON_LIST = [
  ...EASY_POKEMON_LIST,
  {
    id: 6,
    name: "피죤",
    tag: ["진화2", "비둘기", "비행"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/001701.png",
    JJim: false,
    evolution: 2,
  },
  {
    id: 7,
    name: "야도란",
    tag: ["진화3", "물속성", "소라개"],
    img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008001.png",
    JJim: false,
    evolution: 3,
  },
];

export const HARD_POKEMON_LIST =[
    ...NORMAL_POKEMON_LIST ,
    {
        id: 8,
        name: "잠만보",
        tag: ["진화1", "잠자기", "수면"],
        img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/014301.png",
        JJim: false,
        evolution: 1,
      },
      {
        id: 9,
        name: "지라치",
        tag: ["진화1", "별머리", "귀요미"],
        img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/038501.png",
        JJim: false,
        evolution: 1,
      },
]


