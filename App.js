import {View} from 'react-native'
import Body from './pages/body'
import Header from './pages/header'
import Footer from './pages/footer'

export default function App(){
  return(
    <View style={{flex:1}}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  )
}