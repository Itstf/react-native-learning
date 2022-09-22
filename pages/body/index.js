import React, {Component, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import styles from './styles';

export default function Body(){
  const[cont, setCont] = useState(0)
  const contar = () => {setCont(cont+1)}
  const subtrair = () => {setCont(cont-1)}

  const [operacao, setOperacao] = useState('')
  const [resultado, setResultado] = useState('')
  const operar = () => (setResultado(eval(operacao)))

  const [cor, setCor] = useState('white')
  console.log(cor)
  
    return (
        <View style={{backgroundColor:cor, flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View>
              <TextInput style={styles.contador} placeholder='Expressão' onChangeText={(x)=> {setOperacao(x)}} keyboardType='numeric' value={String((operacao))} />
              <Separator />
              <Button title="Resultado"  color="#FA8072" onPress={() => operar()} />
              <Separator />
              <TextInput style={styles.contador} placeholder='Resultado' keyboardType='numeric' value={String((resultado))} />
              <Separator />
              <Button  title="Somar"  color="#00BFFF" onPress={() => contar()}/>
              <Separator />
              <Text style={styles.contador}> {cont}</Text>
              <Separator />
              <Button  title="Subtrair" color="#EE82EE" onPress={() => subtrair()}/>
          </View>
          <View style={styles.botoes}>
            <Separator />
              <Button
                title='Rosa'
                onPress={()=>setCor('#FF1493')}
              />
          </View>
          <View style={styles.botoes}>
            <Separator />
            <Button
              title='Roxo'
              onPress={()=>setCor('#A020F0')}
            />
          </View>
          <View style={styles.botoes}>
            <Separator />
            <Button
              title='Azul'
              onPress={()=>setCor('#0000FF')}
            />
          </View>
        </View> 
        
    );
}

const Separator = () => (
  <View style={styles.separator} />
);

