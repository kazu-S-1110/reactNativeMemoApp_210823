import React from 'react'
import styled from 'styled-components'
import { Appbar } from './src/components/Appbar'
import { CircleButton } from './src/components/CircleButton'
import { MemoList } from './src/components/MemoList'

export default function App() {
  return (
    <Container>
      <Appbar />
      <MemoList />
      <CircleButton>add</CircleButton>
    </Container>
  )
}


const Container = styled.View`
  flex: 1;
  background-color: #eefffb;
`
