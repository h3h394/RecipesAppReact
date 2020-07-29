/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "../reusableComponents/Container";

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();

  return (
    <section css={styles} className="fullRecipe">
      <Container>
        {recipes &&
          recipes
            .filter((recipeData) => recipeData.recipe.label === id)
            .map((recipeData, index) => (
              <div key={index} className="fullRecipeCard">
                <div
                  style={{
                    background: `url(${recipeData.recipe.image}) no-repeat center/cover`,
                  }}
                  className="fullRecipeBg"
                ></div>
                <div className="fullRecipeInfo">
                  <h2>{recipeData.recipe.label}</h2>
                  {recipeData.recipe.ingredientLines.map(
                    (ingredient, index) => (
                      <ul key={index}>
                        <li>{ingredient}</li>
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 58px);
  background: #fff;
  display: flex;
  .container {
    margin: auto;
    .fullRecipeCard {
      width: 100%;
      display: flex;
      .fullRecipeBg {
        width: 100%;
        max-width: 50%;
        min-height: 600px;
        height: 600px;
      }
      .fullRecipeInfo {
        width: 100%;
        max-width: 50%;
        height: 600px;
        max-height: 600px;
        padding: 20px 38px;
        background: #353b80;
        color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 1em;
        }
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px #142b44;
          border-radius: 50px;
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.5);
          outline: 1px solid slategrey;
          border-radius: 50px;
        }
        ul {
          margin: 12px 0 0 0;
          li {
            margin: 4px 0 0 0;
            word-wrap: break-word;
          }
        }
      }
    }
  }
  @media (max-width: 855px) {
    .container {
      .fullRecipeCard {
        flex-direction: column;
        align-items: center;
        .fullRecipeBg {
          max-width: 100%;
          min-height: 280px;
          height: 280px;
        }
        .fullRecipeInfo {
          max-width: 100%;
          height: auto;
          max-height: 420px;
          h2 {
            font-size: 22px;
          }
          ul {
            li {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;

export default FullRecipe;
