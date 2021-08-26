import React from 'react'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'
import { MemoList } from '../components/MemoList'
import { AntDesign } from '@expo/vector-icons'


export const MemoListScreen = () => {
  return (
    <Container>
      <Appbar />
      <MemoList />
      <CircleButton>
        <AntDesign name="plus" size={24} color="white" />
      </CircleButton>
    </Container>
  )
}

