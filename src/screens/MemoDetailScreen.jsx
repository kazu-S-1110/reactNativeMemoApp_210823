import React from 'react'
import styled from 'styled-components'
import { Appbar } from '../components/Appbar'
import { CircleButton } from '../components/CircleButton'
import { View, Text, ScrollView } from 'react-native'

export const MemoDetailScreen = () => {
  return (
    <>
      <Appbar />
      <View>
        <Text>Buy list</Text>
        <Text>2021.12.24 10:00</Text>
      </View>

      <ScrollView>
        <Text>
          Fugiat ut reprehenderit minim voluptate aliqua non nulla aliqua amet ipsum. Aliquip non veniam et sunt cillum in ullamco consectetur laboris eiusmod consequat duis et cillum. Consequat est sint ex velit incididunt. Tempor velit excepteur veniam cupidatat id voluptate. Laboris pariatur ad reprehenderit est tempor eu elit anim dolor sunt amet commodo reprehenderit. Ex eiusmod in fugiat tempor culpa. Eiusmod do ex ullamco elit cillum proident enim velit tempor consectetur est do labore.
          Fugiat ut reprehenderit minim voluptate aliqua non nulla aliqua amet ipsum. Aliquip non veniam et sunt cillum in ullamco consectetur laboris eiusmod consequat duis et cillum. Consequat est sint ex velit incididunt. Tempor velit excepteur veniam cupidatat id voluptate. Laboris pariatur ad reprehenderit est tempor eu elit anim dolor sunt amet commodo reprehenderit. Ex eiusmod in fugiat tempor culpa. Eiusmod do ex ullamco elit cillum proident enim velit tempor consectetur est do labore.
        </Text>
      </ScrollView>
      <CircleButton>Edit</CircleButton>
    </>
  )
}
