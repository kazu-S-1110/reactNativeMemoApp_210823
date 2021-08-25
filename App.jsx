import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
      <Appbar>
        <AppbarInner>
          <AppbarTitle>Memo App</AppbarTitle>
          <AppbarRight>Log out</AppbarRight>
        </AppbarInner>
      </Appbar>

      <View>
        <MemoListItem>
          <View>
            <MemoListItemTitle>Buy list</MemoListItemTitle>
            <MemoListItemDate>2021.08.25</MemoListItemDate>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </MemoListItem>
        <MemoListItem>
          <View>
            <MemoListItemTitle>Buy list</MemoListItemTitle>
            <MemoListItemDate>2021.08.25</MemoListItemDate>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </MemoListItem>
        <MemoListItem>
          <View>
            <MemoListItemTitle>Buy list</MemoListItemTitle>
            <MemoListItemDate>2021.08.25</MemoListItemDate>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </MemoListItem>
        <MemoListItem>
          <View>
            <MemoListItemTitle>Buy list</MemoListItemTitle>
            <MemoListItemDate>2021.08.25</MemoListItemDate>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </MemoListItem>


      </View>

      <CircleButton style={{
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 1 },
      }}>
        <CircleButtonLabel>+</CircleButtonLabel>
      </CircleButton>
    </Container>
  )
}

const styles = StyleSheet.create({
  appbarInner: {
    alignItems: 'center',
  },
})
const AppbarTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 800;
  line-height: 40;
  color: white;
`
const AppbarRight = styled.Text`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  right: 20px;
  bottom: 10px;
`

const Appbar = styled.View`
  width: 100%;
  height: 104px;
  background-color: #a4c3f0;
  justify-content: flex-end;
`

const Container = styled.View`
  flex: 1;
  background-color: #eefffb;
`

const AppbarInner = styled.View`
  align-items: center;
`

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
const CircleButton = styled.View`
  background-color: #467fd3;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 19px;
  bottom: 40px;

`
const CircleButtonLabel = styled.Text`
  color: #ffffff;
  font-size: 40px;
  line-height: 40px;
`