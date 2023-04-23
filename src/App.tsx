import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs';
import Platform from './components/Platform/Platform';
import Enter from "./components/Enter/Enter";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from "react";

const AppWrapper = styled.div`
  width:100%;
  min-height: 100vh;
  //padding:   20px   60px  0 60px  ;
  background-image: url("/imgs/group.png");
  background-size: cover;
`
const MenuBlock = styled.div`
  justify-content: space-between;
  display: flex;
  text-align: center;
    vertical-align: middle;
    align-items: center;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  background-color: #fbfbfb;
  color:#4F46E5;
  border: 1px solid #4F46E5;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0062cc;
    color: #fff;
    
  }
  &:active {
    transform: scale(0.95);
  }
`;



function App() {
  const [showMenu, setShowMenu] = useState(true);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <AppWrapper>
      {showMenu && (<MenuBlock >
        <Navbar />
        <ButtonLink to="/enter" onClick={handleClick}>Вход</ButtonLink>
      </MenuBlock>)}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
    </AppWrapper >
  );
}

export default App;
