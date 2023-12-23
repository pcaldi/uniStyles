import { theme } from "../../libs/theme"
import { createStyleSheet } from "../../libs/unistyles"

export const stylesheet = createStyleSheet(() => ({
  container: {
    width: "100%",
    height: 56,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    fontWeight: "700",
    fontSize: theme.fontSize.md,

  },
}))
