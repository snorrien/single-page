import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs';
import Platform from './components/Platform';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width:100%;
  min-height: 100vh;
  padding:   20px   60px  0 60px  ;
  background-image: url("/imgs/group.png");
  background-size: cover;
`




function App() {
  return (
    <AppWrapper>

      <Navbar />
      <AboutUs/>
    </AppWrapper >
  );
}

export default App;
