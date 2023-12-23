import { View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { stylesheet } from "./styles"
import { useStyles } from "../../libs/unistyles"

interface Props {
  max: number
  value: number
}

export function Rating({ max = 5, value }: Props) {

  const { styles } = useStyles(stylesheet)

  const length = value > max ? max : value

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => (
        <MaterialIcons key={index} name="star" size={42} color={"#685ED9"} />
      ))}

      {Array.from({ length: max - value }).map((_, index) => (
        <MaterialIcons key={index} name="star" size={42} color={"#E3E1E4"} />
      ))}
    </View>
  )
}
