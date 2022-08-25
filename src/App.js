import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import { StatusBar } from 'react-native';
import {theme} from './theme';
import { Button} from 'react-native';
import Input from './components/Input';


const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${({theme})=>theme.background};
  align-items:center;
  justify-content:center;
  justify-content:flex-start;
`;

const Title = styled.Text`
  font-size:40px;
  font-weight:600;
  color: ${({theme})=>theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;


export default function App(){
  const [newTask, setNewTask] = useState('');

  const _addTask = () =>{
    alert(`Add:${newTask}`);
    setNewTask('');
  };


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input placeholder="+ Add a Task"/>
        <Button         
          title="완료항목 전체삭제"
          color="#fbc531"
        />
      </Container>
    </ThemeProvider>
  );
}
