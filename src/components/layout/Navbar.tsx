import styled from "styled-components";
import NavLink from "./NavLink";
import {links} from "../../configs";

const Navbar = () => {
    return (
        <NavbarStyle>
            {links.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
            ))}
        </NavbarStyle>
    )
}

export default Navbar

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  gap: 1rem;
  padding: 1rem;
`