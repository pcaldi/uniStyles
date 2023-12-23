import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { breakpoints } from "./breakpoints";
import { components } from "./components";


export const theme = {
  colors,
  fontSize,
  breakpoints,
  components,
} as const   //as const - para o typescript lidar melhor com isso.
