import React from 'react'
import styled from 'styled-components'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { MemoList } from '../components/MemoList'

export const MemoListScreen = () => {
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
