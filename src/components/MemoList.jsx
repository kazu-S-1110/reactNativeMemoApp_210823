import { Alert, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const MemoList = () => {
  //app.jsxのstack.navigatorに記述してないコンポーネントでも画面遷移をするためにuseNavigationを使用する
  const navigation = useNavigation()
  const items = ["task", "Buy", "make", "run"]
  return (
    <>
      {items.map((item) => (
        <MemoListItem key={item}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MemoDetail")}
          >
            <MemoListItemTitle>{item}</MemoListItemTitle>
            <MemoListItemDate>{"2021.08.25"}</MemoListItemDate>
          </TouchableOpacity>
          <View>
            <DeleteIcon
              onPress={() => Alert.alert("Delete!")}>
              <AntDesign name="delete" size={24} color="#b0b0b0" />
            </DeleteIcon>
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
const DeleteIcon = styled.TouchableOpacity`
  padding: 10px;
`