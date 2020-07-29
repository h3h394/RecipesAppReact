/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Button from "../reusableComponents/Button";

const Pagination = () => {
  const { handlePage, isHidden, loading, error } = useContext(RecipesContext);

  return (
    <React.Fragment>
      {isHidden && !loading && !error && (
        <div css={styles} className="pagination">
          <Button btnText="Prev" handleClick={() => handlePage("previous")} />
          <Button btnText="Next" handleClick={() => handlePage("next")} />
        </div>
      )}
    </React.Fragment>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 28px 0 0 0;
  button {
    margin: 0 10px;
  }
`;

export default Pagination;
