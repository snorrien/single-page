import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Platform from './components/Platform/Platform';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import EnterPage from "./components/EnterPage/EnterPage";

const Body = styled.div`
  height: 100%;
  margin: 0;
  padding: 0px;
`;
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
  padding: 2% 8%  2% 8%;
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
  user-select: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0062cc;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
`;
const LogIn = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 12px 24px;
  color:#4F46E5;
  text-decoration: underline;
  text-decoration-color: rgba(79, 70, 229, 1);
  text-decoration-skip-ink: none;
  text-underline-offset: 5px;
`;

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedMenuVisibility = localStorage.getItem('menuVisibility');
    if (storedMenuVisibility) {
      setShowMenu(storedMenuVisibility === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('menuVisibility', String(showMenu));
  }, [showMenu]);

  function handleClick() {
    setShowMenu(false);
  }
  function visibleMenu() {
    setShowMenu(true);
  }
  function showUser() {
    setLoggedIn(true);
  }

  return (
    <Body>
      <AppWrapper>
        {showMenu && (<MenuBlock >
          <Navbar />
          {!loggedIn ? (<ButtonLink to="/enter" onClick={handleClick}>Вход</ButtonLink>) :
            (<LogIn>
              <p>Антон З.</p>
              <img src="/imgs/Tabler.png" />
            </LogIn>)}
        </MenuBlock>)}
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/enter" element={<EnterPage showUser={showUser} visibleMenu={visibleMenu} />} />
        </Routes>
      </AppWrapper>
    </Body>
  );
}

export default App;
