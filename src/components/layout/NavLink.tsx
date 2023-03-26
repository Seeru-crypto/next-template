// components/NavLink.tsx
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin: 0 0.5rem;
  transition: color 0.3s;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  padding: ${({ theme }) => theme.size.$100};
  border-radius: ${({ theme }) => theme.size.$100};

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} passHref>
            <StyledLink>{children}</StyledLink>
        </Link>
    );
};

export default NavLink;
