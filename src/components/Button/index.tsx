import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { stylesheet } from "./styles"
import { useStyles } from "../../libs/unistyles"
import { theme } from "../../libs/theme"

interface Props extends TouchableOpacityProps {
  title: string
  variant?: "base" | "outline" | "dark"
}

export function Button({ title, variant = "base", ...rest }: Props) {
  const { styles } = useStyles(stylesheet)
  return (
    <TouchableOpacity style={[styles.container, theme.components.button[variant]]} activeOpacity={0.7} {...rest}>
      <Text style={[styles.text, theme.components.buttonText[variant]]}>{title}</Text>
    </TouchableOpacity>
  )
}
