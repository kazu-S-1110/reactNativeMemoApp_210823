import React from 'react'
import styled from 'styled-components'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { Container } from '../components/Container'

export const MemoDetailScreen = () => {
  return (
    <Container>
      <Appbar />
      <MemoHeader>
        <MemoTitle>Buy list</MemoTitle>
        <MemoDate>2021.12.24 10:00</MemoDate>
      </MemoHeader>

      <MemoBody>
        <MemoText>
          Fugiat ut reprehenderit minim voluptate aliqua non nulla aliqua amet ipsum. Aliquip non veniam et sunt cillum in ullamco consectetur laboris eiusmod consequat duis et cillum. Consequat est sint ex velit incididunt. Tempor velit excepteur veniam cupidatat id voluptate. Laboris pariatur ad reprehenderit est tempor eu elit anim dolor sunt amet commodo reprehenderit. Ex eiusmod in fugiat tempor culpa. Eiusmod do ex ullamco elit cillum proident enim velit tempor consectetur est do labore.
          Fugiat ut reprehenderit minim voluptate aliqua non nulla aliqua amet ipsum. Aliquip non veniam et sunt cillum in ullamco consectetur laboris eiusmod consequat duis et cillum. Consequat est sint ex velit incididunt. Tempor velit excepteur veniam cupidatat id voluptate. Laboris pariatur ad reprehenderit est tempor eu elit anim dolor sunt amet commodo reprehenderit. Ex eiusmod in fugiat tempor culpa. Eiusmod do ex ullamco elit cillum proident enim velit tempor consectetur est do labore.
        </MemoText>
      </MemoBody>
      <CircleButton style={{ top: 60, bottom: "auto" }} name="edit" />

    </Container >
  )
}

const MemoHeader = styled.View`
  background-color: #467fd3;
  height: 96px;
  justify-content: center;
  padding: 19px 24px;
`
const MemoTitle = styled.Text`
  color: #ffffff;
  font-size: 32px;
  line-height: 32;
  font-weight: 700;
`
const MemoDate = styled.Text`
  color: #ffffff;
  font-size: 12px;
  line-height: 16;
`

const MemoBody = styled.ScrollView`
  padding: 32px 27px;
`

const MemoText = styled.Text`
  font-size: 16px;
  line-height: 24;
`