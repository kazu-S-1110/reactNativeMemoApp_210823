import styled from 'styled-components'
import React from 'react'


export const Appbar = () => {
  return (
    <AppbarContainer>
      <AppbarInner>
        <AppbarTitle>Memo App</AppbarTitle>
        <AppbarRight>Log out</AppbarRight>
      </AppbarInner>
    </AppbarContainer>

  )
}

const AppbarTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  color: white;
`
const AppbarRight = styled.Text`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  right: 20px;
  bottom: 10px;
`

const AppbarContainer = styled.View`
  width: 100%;
  height: 104px;
  background-color: #a4c3f0;
  justify-content: flex-end;
`

const AppbarInner = styled.View`
  align-items: center;
`