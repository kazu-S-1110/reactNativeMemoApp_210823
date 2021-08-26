import React from 'react'
import styled from 'styled-components'

export const CircleButton = ({ children, style }) => {
  return (
    <CircleButtonCon style={[{
      shadowOpacity: 0.75,
      shadowRadius: 6,
      shadowColor: 'black',
      shadowOffset: { height: 2, width: 1 },
      elevation: 8
    }, style]}>
      <CircleButtonLabel>{children}</CircleButtonLabel>
    </CircleButtonCon>)
}


const CircleButtonCon = styled.View`
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
