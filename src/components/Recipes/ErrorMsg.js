/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ErrorMsg = () => (
  <h2 css={styles}>We couldn't find what you were looking for.</h2>
);

const styles = css`
  font-size: 26px;
  line-height: 1;
  color: red;
  margin: 18px 0 0 0;
  @media (max-width: 754px) {
    font-size: 19px;
  }
`;

export default ErrorMsg;
