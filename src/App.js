import React from "react";
import { RecipesState } from "./context/RecipesContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import FullRecipe from "./components/Recipes/FullRecipe";
import "./App.css";

const App = () => {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/" component={Hero} />
        <Route path="/recipes/:id" component={FullRecipe} />
      </Router>
    </RecipesState>
  );
};

export default App;
