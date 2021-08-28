import { styled } from "@styles/styled";

export default function Nav() {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <NavLink href="#home">Etusivu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">Minusta</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#classes">Tunnit</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#videos">Videot</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#blog">Blogi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Yhteystiedot</NavLink>
        </NavItem>
      </NavList>
    </Wrapper>
  );
}

const Wrapper = styled("nav", {});

const NavList = styled("ul", {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "$normal",
});

const NavItem = styled("li", {});

const NavLink = styled("a", {
  textDecoration: "none",
  color: "$text",

  "&:hover": {
    textDecoration: "underline",
  },
});
