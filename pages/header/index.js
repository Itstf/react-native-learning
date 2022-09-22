import { Text, View } from "react-native"
import estilos from './styles'

export default function Header() {
    return (
        <View style={estilos.continer}>
            <Text style={estilos.txt}>Header</Text>
        </View>
    )
}