/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "../reusableComponents/Container";
import Search from "../Search/Search";
import Recipes from "../Recipes/Recipes";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

const Hero = () => {
  const { loading } = useContext(RecipesContext);

  return (
    <section css={styles} className="hero">
      <Container>
        <Search />
      </Container>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Container>
            <Recipes />
          </Container>
          <Pagination />
        </React.Fragment>
      )}
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 58px);
  padding-bottom: 28px;
  position: relative;
  .container {
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 754px) {
    .container {
      &:nth-of-type(2) {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Hero;
