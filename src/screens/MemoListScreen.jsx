import React from 'react'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'
import { MemoList } from '../components/MemoList'
import { AntDesign } from '@expo/vector-icons'


export const MemoListScreen = ({ navigation }) => {
  return (
    <Container>
      <MemoList />
      <CircleButton name="plus" onPress={() => navigation.navigate("MemoCreate")} />
    </Container>
  )
}

