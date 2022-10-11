export const theme = {
  bgColor: "#F5EFE6",
  boardColor: "#AEBDCA",
  cardColor: "white",
  isDraggingColor: "rgba(246, 215, 167, 0.7)",
  isDraggingFromColor: "rgba(232, 223, 202, 0.7)",

  color: {
    white: "#fff",
    black: "#000",
    gray: "#a7aabc",
    darkgray: "#434656",
    lightpurple: "#a6accd",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  laptop: customMediaQuery(1440),
  mobile: customMediaQuery(420),
};
