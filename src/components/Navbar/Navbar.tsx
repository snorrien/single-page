
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBlock = styled.div`
  justify-content: space-between;
  display: flex;
  text-align: center;
    vertical-align: middle;
    align-items: center;
`;

const MenuContainer = styled.div`
  justify-content: space-between;
  display: flex;
  text-align: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 130px;
`;

const MenuItem = styled.li`
  margin: 0 30px;
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

const PageLink = styled(Link)`
  text-decoration: none;
  color:  rgba(0, 0, 0, 1);
  font-weight: 400;
  background-color: transparent; 
  caret-color: transparent; 
  cursor: pointer; 
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(79, 70, 229, 1);
    text-decoration-skip-ink: none;
    text-underline-offset: 5px;
  }
`

const Navbar = () => {
  return (

    <MenuBlock>
      <MenuContainer>
        <img src="/imgs/smartDialogs.png" alt="логотип" />
        <Menu>
          <MenuItem><PageLink to="/">O нас</PageLink></MenuItem>
          <MenuItem><PageLink to="/platform">Платформа</PageLink></MenuItem>
          <MenuItem><PageLink to="#">Портфолио</PageLink></MenuItem>
          <MenuItem><PageLink to="#">Контакты</PageLink></MenuItem>
        </Menu>
      </MenuContainer>
      
    </MenuBlock>

  )
}

export default Navbar;
