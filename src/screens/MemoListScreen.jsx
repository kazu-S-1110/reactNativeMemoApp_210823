import React, { useEffect } from 'react'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'
import { LogOutButton } from '../components/LogOutButton'
import { MemoList } from '../components/MemoList'


export const MemoListScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    })
  }, [])
  return (
    <Container>
      <MemoList />
      <CircleButton name="plus" onPress={() => navigation.navigate("MemoCreate")} />
    </Container>
  )
}

