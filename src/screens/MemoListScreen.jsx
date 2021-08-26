import React from 'react'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'
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

