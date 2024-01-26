const seeds = [
  {
    image:
      "https://raw.githubusercontent.com/jyoung105/fast-avatar/main/public/musk.jpg",
    prompt: "simplified continuous line colour drawing",
  },
  {
    image:
      "https://github.com/jyoung105/fast-avatar/blob/main/public/monalisa.jpg",
    prompt: "analog film photo",
  },
  {
    image:
      "https://raw.githubusercontent.com/jyoung105/fast-avatar/main/public/bob.jpg",
    prompt: "anime in 90's",
  },
  {
    image:
      "https://raw.githubusercontent.com/jyoung105/fast-avatar/main/public/pearl.jpg",
    prompt: "Cyberpunk 2077 killbot",
  },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
