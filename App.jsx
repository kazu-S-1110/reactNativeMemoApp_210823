import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

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
        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Buy list</Text>
            <Text>2021.08.25</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  appbarInner: {
    alignItems: 'center',
  },
});
const AppbarTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 800;
  line-height: 40;
  color: white;
`;
const AppbarRight = styled.Text`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  right: 20px;
  bottom: 10px;
`;

const Appbar = styled.View`
  width: 100%;
  height: 104px;
  background-color: #a4c3f0;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex: 1;
  background-color: #eefffb;
`;

const AppbarInner = styled.View`
  align-items: center;
`;
