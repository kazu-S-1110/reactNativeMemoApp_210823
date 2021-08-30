import React from 'react'
import { Appbar } from '../components/Appbar'
import { Container } from '../components/Container'
import styled from 'styled-components'
import { CircleButton } from '../components/CircleButton'

export const MemoEditScreen = () => {
  return (
    <Container>
      <Appbar />
      <InputContainer>
        <InputArea value="買い物リスト" multiline style={{ "TextAlineVertical": "top" }} />
      </InputContainer>
      <CircleButton name="check" />
    </Container>
  )
}
const InputContainer = styled.View`
  padding:27px 32px;
  flex: 1;
`
const InputArea = styled.TextInput`
  flex: 1;
  font-size: 16px;
  line-height: 24;
`

