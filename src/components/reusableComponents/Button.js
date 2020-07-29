/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnText, handleClick }) => (
  <button className="btn" onClick={handleClick} css={styles}>
    {btnText}
  </button>
);

const styles = css`
  border: none;
  outline: none;
  width: 90px;
  padding: 10px 0;
  color: #fff;
  background: #353b80;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Button;
