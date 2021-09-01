import React from 'react'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'
import { MemoList } from '../components/MemoList'


export const MemoListScreen = ({ navigation }) => {
  return (
    <Container>
      <MemoList />
      <CircleButton name="plus" onPress={() => navigation.navigate("MemoCreate")} />
    </Container>
  )
}

