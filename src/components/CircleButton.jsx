import React from 'react'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'


export const CircleButton = ({ style, name, onPress }) => {
  return (
    <CircleButtonCon style={[{
      shadowOpacity: 0.75,
      shadowRadius: 6,
      shadowColor: 'black',
      shadowOffset: { height: 2, width: 1 },
      elevation: 8
    }, style]} onPress={onPress}>
      <CircleButtonLabel>
        <AntDesign name={name} size={24} color="white" />
      </CircleButtonLabel>
    </CircleButtonCon>)
}


const CircleButtonCon = styled.TouchableOpacity`
  background-color: #467fd3;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 19px;
  bottom: 40px;

`
const CircleButtonLabel = styled.Text`
  color: #ffffff;
  font-size: 40px;
  line-height: 40px;
`
