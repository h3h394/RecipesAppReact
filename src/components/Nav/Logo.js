/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" css={styles}>
    Recipes<span>.</span>
  </Link>
);

const styles = css`
  text-decoration: none;
  font-size: 24px;
  line-height: 1;
  color: #fff;
  span {
    color: lightgreen;
    font-weight: 800;
    margin-left: 2px;
  }
`;

export default Logo;
