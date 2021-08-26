import { Text, View } from 'react-native'
import styled from 'styled-components'
import React from 'react'

export const MemoList = () => {
  const items = ["task", "Buy", "make", "run"]
  return (
    <>
      {items.map((item) => (
        <MemoListItem>
          <View>
            <MemoListItemTitle>{item}</MemoListItemTitle>
            <MemoListItemDate>{"2021.08.25"}</MemoListItemDate>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </MemoListItem>
      ))}
    </>
  )
}


const MemoListItem = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0,0,0,0.15);
`

const MemoListItemTitle = styled.Text`
  font-size: 18px;
  line-height: 32px;
`
const MemoListItemDate = styled.Text`
  font-size: 15px;
  line-height: 16px;
  color: #848484;
`