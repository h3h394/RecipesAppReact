/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return (
    <React.Fragment>
      {error && <ErrorMsg />}
      {recipes &&
        !error &&
        !loading &&
        recipes.map((recipe, index) => (
          <div css={styles} key={index} className="recipe">
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  background: `url(${recipe.recipe.image}) no-repeat center/cover`,
                }}
                className="recipeBg"
              ></div>
            </a>
            <div className="recipeInfo">
              <p>{recipe.recipe.label}</p>
              <p>{Math.floor(recipe.recipe.calories)} calories</p>
              <Link to={`/recipes/${recipe.recipe.label}`}>View more</Link>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

const styles = css`
  width: 100%;
  max-width: 330px;
  margin: 28px 0 0 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  a {
    text-decoration: none;
    .recipeBg {
      width: 100%;
      height: 280px;
    }
  }
  .recipeInfo {
    background: #202342;
    padding: 24px 34px;
    p {
      color: #fafafa;
      &:last-of-type {
        margin: 6px 0;
      }
    }
    a {
      display: inline-block;
      margin: 4px 0 0 0;
      padding: 8px;
      border: none;
      outline: none;
      color: #fff;
      background: #353b80;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
  @media (max-width: 754px) {
    max-width: 520px;
  }
  @media (min-width: 755px) and (max-width: 1110px){
    max-width: 48%;
  }
`;

export default Recipes;
