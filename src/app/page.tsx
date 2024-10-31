'use client';

import React, { useState } from 'react';
import Image from 'next/image'; 

interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
  url: string;
}

export default function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=49ce659f&app_key=6b7bc5238223c6517b9aa06d34425e34`
      );
      const data = await response.json();
      setRecipes(data.hits.map((hit: any) => hit.recipe));
      setError('');
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) fetchRecipes();
  };

  return (
    <div className="container">
      <h1 className="title">Recipe Search</h1>
      <form onSubmit={handleSearch} className="searchForm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredient"
          className="searchInput"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
      
      {error && <p className="error">{error}</p>}

      <div className="recipeList">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipeCard">
            <h2>{recipe.label}</h2>
            <Image
              src= "/top-view-different-seasonings-with-raw-pasta-dark-background-product-raw-food-salad-health-diet.jpg"
              alt={recipe.label}
              width={300}
              height={200}
              className="recipeImage" 
            />
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredientLines.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="recipeLink">
              Full Recipe
            </a>
          </div>
        ))}
      </div>

      <footer className="footer">
        &copy; Recipe Search by Yemna Mehmood - All rights reserved
      </footer>
    </div>
  );
}
