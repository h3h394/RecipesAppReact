/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Button from "../reusableComponents/Button";

const Search = () => {
  const { search, setSearch, getRecipes } = useContext(RecipesContext);

  return (
    <form css={styles} onSubmit={getRecipes}>
      <div className="formContainer">
        <input
          required
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>Recipe / Ingredient</label>
      </div>
      <Button btnText="Search" />
    </form>
  );
};

const styles = css`
  width: 100%;
  margin: 28px 0 0 0;
  display: flex;
  align-items: center;
  .formContainer {
    height: 38px;
    position: relative;
    input,
    button {
      height: 100%;
      border: none;
      outline: none;
    }
    input {
      border: 1px solid #eee;
      padding: 0 10px;
      width: 260px;
      display: block;
      &:valid,
      &:focus {
        border: 1px solid #353b80;
        + label {
          color: #353b80;
          font-size: 16px;
          font-weight: 600;
          transform: translateY(-24px);
        }
      }
    }
    label {
      position: absolute;
      top: 0;
      font-size: 16px;
      font-weight: 300;
      pointer-events: none;
      transform: translateY(9px) translateX(10px);
      transition: all 400ms ease-in-out;
    }
  }
  @media (max-width: 754px) {
    max-width: 520px;
    margin: 28px auto 0 auto;
    .formContainer {
      width: 80%;
      input {
        width: 100%;
      }
      button {
        width: 20%;
      }
    }
  }
`;

export default Search;
