import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled.a<MenuLinkProps>`
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
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
`;

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};


type MenuLinkProps = {
  isActive?: boolean;
};

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);

  const match = useMatch({ path: resolvedPath.pathname, end: true });
  const isActive = match !== null;

  return (
    <NavLink isActive={isActive ? true : undefined}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </NavLink>
  );
};

export default CustomLink;