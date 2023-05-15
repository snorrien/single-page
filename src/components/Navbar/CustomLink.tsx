import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};
type PageLinkProps = {
  isActive?: boolean;
};
const PageLink = styled.a<PageLinkProps>`
`;

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  const isActive = match !== null;

  return (
    <PageLink isActive={isActive ? true : undefined}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </PageLink>
  );
};

export default CustomLink;