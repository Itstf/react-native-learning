import { Text, View } from "react-native"
import estilos from './styles'

export default function Footer() {
    return (
        <View style={estilos.continer}>
            <Text style={estilos.txt}>Footer</Text>
        </View>
    )
}