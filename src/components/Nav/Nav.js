/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../reusableComponents/Container";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav css={styles}>
      <Container>
        <Logo />
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  padding: 16px 0;
  background: #353b80;
  h2 {
    color: #fff;
  }
`;

export default Nav;
