import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Platform from './components/Platform/Platform';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from "react";
import EnterPage from "./components/EnterPage/EnterPage";

const AppWrapper = styled.div`
  background-image: url("/imgs/group.png");
  height: 100vh;
  overflow: auto;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`
const MenuBlock = styled.div`
  justify-content: space-between;
  display: flex;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  padding: 2% 5%  2% 5%;
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


const Body = styled.body`
  height: 100%;
  margin: 0;
  padding: 0px;
`;


function App() {
  const [showMenu, setShowMenu] = useState(true);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (

      <Body>
        <AppWrapper>
          {showMenu && (<MenuBlock >
            <Navbar />
            <ButtonLink to="/enter" onClick={handleClick}>Вход</ButtonLink>
          </MenuBlock>)}
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/enter" element={<EnterPage />} />
          </Routes>
        </AppWrapper >
      </Body>

  );
}

export default App;
