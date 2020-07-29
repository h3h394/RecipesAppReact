import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesState = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [firstRecipe, setFirstRecipe] = useState(0);
  const [lastRecipe, setLastRecipe] = useState(9);
  const [isHidden, setIsHidden] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const APP_ID = "9d90c7b6";
  const APP_KEY = "ad5922d7ab464481cb6c20cc2d182e85";
  const FIRST_REQ = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`;
  const URL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${firstRecipe}&to=${lastRecipe}`;

  const getFirstResults = async () => {
    setLoading(true);
    const response = await fetch(FIRST_REQ);
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
  };

  const searchRecipes = async () => {
    setError(false);
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    if (search.trim() !== "" && !data.more) {
      setLoading(false);
      setError(true);
      return;
    }
    setRecipes(data.hits);
    setLoading(false);
  };

  const getRecipes = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setIsHidden(true);
    searchRecipes();
  };

  const handlePage = (direction) => {
    if (direction === "next") {
      setFirstRecipe((prevRecipe) => prevRecipe + 9);
      setLastRecipe((prevRecipe) => prevRecipe + 9);
      return;
    }
    if (direction === "previous" && firstRecipe !== 0) {
      setFirstRecipe((prevRecipe) => prevRecipe - 9);
      setLastRecipe((prevRecipe) => prevRecipe - 9);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    searchRecipes();
  }, [firstRecipe, lastRecipe]);

  useEffect(() => {
    getFirstResults();
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        getRecipes,
        search,
        setSearch,
        handlePage,
        isHidden,
        error,
        loading,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
